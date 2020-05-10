/*
 *
 * NaviIntro
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import { Wrapper, Logo, Digest, Title, Desc } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviIntro:index')

const NaviIntro = ({ title, desc, iconSrc }) => {
  return (
    <Wrapper testid="naviIntro">
      <Logo src={iconSrc} />
      <Digest>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Digest>
    </Wrapper>
  )
}

NaviIntro.propTypes = {
  title: T.string.isRequired,
  desc: T.string.isRequired,
  iconSrc: T.string.isRequired,
}

NaviIntro.defaultProps = {}

export default React.memo(NaviIntro)
