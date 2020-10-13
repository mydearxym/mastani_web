import React from 'react'

import { ICON } from '@/config'

import CommunityInfo from './CommunityInfo'

import {
  MenuWrapper,
  CommunityWrapper,
  AccountWrapper,
  MenuLogo,
  ArrowShape,
  MenuArrowShape,
  ArrowShapeLeft,
} from '../styles/bottom_bar/arrow_block'
import { openGlobalMenu } from '../logic'

export const MenuBlock = () => {
  const bgColor = '#071f27'

  return (
    <MenuWrapper bgColor={bgColor} onClick={openGlobalMenu}>
      <MenuLogo src={`${ICON}/shape/more-3.svg`} />
      <MenuArrowShape bgColor={bgColor} />
    </MenuWrapper>
  )
}

export const CommunityBlock = () => {
  const bgColor = '#194d5f'
  const activeBgColor = '#196f70'
  const isSubscribed = true

  return (
    <CommunityWrapper bgColor={isSubscribed ? activeBgColor : bgColor}>
      <CommunityInfo isSubscribed={isSubscribed} />
      <ArrowShape bgColor={isSubscribed ? activeBgColor : bgColor} />
    </CommunityWrapper>
  )
}

export const AccountBlock = () => {
  const bgColor = '#071f27'

  return (
    <AccountWrapper bgColor={bgColor}>
      <ArrowShapeLeft bgColor={bgColor} />
      <MenuLogo src={`${ICON}/user/account-solid.svg`} />
    </AccountWrapper>
  )
}