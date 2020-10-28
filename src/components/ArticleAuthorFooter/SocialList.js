import React from 'react'

import { ICON_CMD } from '@/config'
import { Wrapper, CursorDivider, Icon } from './styles/social_list'

const SocialList = ({ items }) => {
  return (
    <Wrapper>
      <CursorDivider />
      {items.map((item) => (
        <Icon key={item} src={`${ICON_CMD}/item.svg`} />
      ))}
    </Wrapper>
  )
}

export default React.memo(SocialList)
