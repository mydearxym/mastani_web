import React from 'react'

import { ICON, ICON_BASE } from '@/config'
import {
  Wrapper,
  Info,
  HomeBlock,
  CommunityBlock,
  MoreLogo,
  ArrowShape,
  AccountBlock,
  ArrowShapeLeft,
  ItemsWrapper,
  // Item,
  ItemIcon,
  //
  CommunityInfoWrapper,
  CommunityLogo,
  CommunityTitle,
} from '../styles/footer'

const options = [
  {
    title: '过滤',
    raw: 'filter',
    icon: `${ICON}/filter.svg`,
  },
  {
    title: '发现',
    raw: 'discover',
    icon: `${ICON}/discover.svg`,
  },
  {
    title: '设置',
    raw: 'setting',
    icon: `${ICON}/magic.svg`,
  },
  {
    title: '发布',
    raw: 'publish',
    icon: `${ICON}/publish-plus.svg`,
  },
  // {
  //   title: '账户',
  //   raw: 'account',
  //   icon: `${ICON}/account-solid.svg`,
  // },
]

const CommunityInfo = () => {
  return (
    <CommunityInfoWrapper>
      <CommunityLogo src={`${ICON_BASE}/pl/javascript.png`} />
      <CommunityTitle>javascript</CommunityTitle>
    </CommunityInfoWrapper>
  )
}

const Footer = () => {
  return (
    <Wrapper>
      <Info>
        <HomeBlock bgColor="#071f27">
          <MoreLogo src={`${ICON}/header-more-mobile.svg`} />
          {/* <CommunityLogo src={`${ICON_BASE}/site_logo.svg`} /> */}
          <ArrowShape bgColor="#071f27" />
        </HomeBlock>
        <CommunityBlock bgColor="#194d5f">
          <CommunityInfo />
          <ArrowShape bgColor="#194d5f" />
        </CommunityBlock>
      </Info>
      <ItemsWrapper>
        {options.map((item) => (
          // <Item key={item.raw}>{item.title}</Item>
          <ItemIcon key={item.raw} src={item.icon} />
        ))}
      </ItemsWrapper>
      <AccountBlock bgColor="#071f27">
        <ArrowShapeLeft bgColor="#071f27" />
        <MoreLogo src={`${ICON}/account-solid.svg`} />
      </AccountBlock>
    </Wrapper>
  )
}

export default Footer
