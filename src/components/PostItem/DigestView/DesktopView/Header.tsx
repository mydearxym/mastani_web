import { FC } from 'react'
import Link from 'next/link'

import type { TPost } from '@/spec'
import { ROUTE } from '@/constant'
import { ICON_CMD } from '@/config'
import { parseDomain } from '@/utils'

import AvatarsRow from '@/components/AvatarsRow'
import InlineTags from '@/components/InlineTags'

import {
  Wrapper,
  TitleLink,
  LinkIcon,
  Brief,
  Title,
  TagListWrapper,
} from '../../styles/digest_view/header'

type TProps = {
  item: TPost
}

const Header: FC<TProps> = ({ item }) => {
  return (
    <Wrapper>
      <Brief>
        <Link href={`/${ROUTE.POST}/${item.id}`} passHref>
          <Title>{item.title}</Title>
        </Link>
        {item.linkAddr && (
          <TitleLink>
            <LinkIcon src={`${ICON_CMD}/link.svg`} />
            <span style={{ marginLeft: 9 }}>{parseDomain(item.linkAddr)}</span>
          </TitleLink>
        )}
        <TagListWrapper>
          <InlineTags data={item.tags} />
        </TagListWrapper>
      </Brief>
      <AvatarsRow
        users={item.commentsParticipators}
        total={item.commentsCount}
      />
    </Wrapper>
  )
}

export default Header
