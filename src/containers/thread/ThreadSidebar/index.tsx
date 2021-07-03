//

/*
 *
 * ThreadSidebar
 *
 */

import { FC, Fragment } from 'react'

import type { TTag, TC11NLayout } from '@/spec'
import { C11N } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import ClassicView from './ClassicView'
import HolyGrailView from './HolyGrailView'

import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ThreadSidebar')

export type TBaseProps = {
  activeTag: TTag

  onCreate?: () => void
  onTagSelect?: (tag: TTag) => void
  onAdsClose?: () => void
}

export type TProps = { threadSidebar?: TStore } & TBaseProps

const ThreadSidebarContainer: FC<TProps> = ({
  threadSidebar: store,
  activeTag,
  onCreate,
  onTagSelect,
  onAdsClose,
}) => {
  useInit(store)

  const {
    accountInfo: {
      customization: { bannerLayout },
    },
    curCommunity,
    isCommunityDigestInViewport,
  } = store

  return (
    <Fragment>
      {bannerLayout === C11N.CLASSIC ? (
        <ClassicView
          showCommunityBadge={isCommunityDigestInViewport}
          activeTag={activeTag}
          onCreate={onCreate}
          onTagSelect={onTagSelect}
          onAdsClose={onAdsClose}
        />
      ) : (
        <HolyGrailView community={curCommunity} />
      )}
    </Fragment>
  )
}

export default pluggedIn(ThreadSidebarContainer) as FC<TProps>