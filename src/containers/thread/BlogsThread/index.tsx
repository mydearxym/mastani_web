//

/*
 *
 * BlogsThread
 *
 */

import { FC } from 'react'

import { ICON } from '@/config'
import { pluggedIn, buildLog } from '@/utils'
import { C11N, THREAD, ROUTE } from '@/constant'

import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'

import Sticky from '@/components/Sticky'
import PagedContents from '@/components/PagedContents'
import ContentFilter from '@/components/ContentFilter'
import { DropdownButton } from '@/components/Buttons'
import PromotionList from '@/components/PromotionList'

import type { TStore } from './store'

import {
  Wrapper,
  LeftPart,
  RightPart,
  FilterWrapper,
  BadgeWrapper,
  PublisherWrapper,
} from './styles'

import {
  useInit,
  onFilterSelect,
  onUserSelect,
  onPreview,
  onPageChange,
  onContentCreate,
  onTagSelect,
  onAdsClose,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:BlogsThread')

type TProps = {
  blogsThread?: TStore
  testid?: string
}

const BlogsThreadContainer: FC<TProps> = ({
  blogsThread: store,
  testid = 'blogs-thread',
}) => {
  useInit(store)

  const {
    pagedBlogsData,
    curView,
    filtersData,
    activeBlog,
    curRoute,
    accountInfo,
    isLogin,
    activeTagData,
    curCommunity,
    curThread,
    showFilterBar,
    accountInfo: {
      customization: { bannerLayout },
    },
    isCommunityDigestInViewport,
  } = store

  const { subPath } = curRoute
  const { totalCount } = pagedBlogsData

  return (
    <Wrapper testid={testid}>
      <LeftPart>
        {showFilterBar && (
          <FilterWrapper>
            <ContentFilter
              thread={THREAD.BLOG}
              onSelect={onFilterSelect}
              activeFilter={filtersData}
              isLogin={isLogin}
              accountInfo={accountInfo}
              totalCount={totalCount}
            />
          </FilterWrapper>
        )}

        <PagedContents
          data={pagedBlogsData}
          community={curCommunity.raw}
          thread={THREAD.POST}
          curView={curView}
          active={activeBlog}
          accountInfo={accountInfo}
          onUserSelect={onUserSelect}
          onAuthorSelect={onUserSelect}
          onPreview={onPreview}
          onPageChange={onPageChange}
        />
      </LeftPart>

      <RightPart>
        <PublisherWrapper show={isCommunityDigestInViewport}>
          <DropdownButton
            placement="bottom-end"
            options={[
              {
                key: 'publish',
                icon: `${ICON}/edit/publish-write.svg`,
                title: '提交博客',
                desc: '发布后会第一次出现在相应版块首页。',
              },
              {
                key: 'link',
                link: 'https://newpage',
                icon: `${ICON}/article/report.svg`,
                title: '发布须知',
                desc:
                  '请确保你发布的内容符合社区的基本价值观和规范，否则会被限流或直接删除。',
              },
            ]}
            panelMinWidth="210px"
            onClick={(key) => {
              if (key === 'publish') onContentCreate()
            }}
          >
            提交博客
          </DropdownButton>
        </PublisherWrapper>

        <Sticky offsetTop={55}>
          <BadgeWrapper show={!isCommunityDigestInViewport}>
            <CommunityJoinBadge />
          </BadgeWrapper>
          <TagsBar
            thread={THREAD.BLOG}
            onSelect={onTagSelect}
            active={activeTagData}
          />
          <PromotionList onClose={onAdsClose} />
        </Sticky>
      </RightPart>
    </Wrapper>
  )
}

export default pluggedIn(BlogsThreadContainer) as FC<TProps>