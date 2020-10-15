import styled from 'styled-components'

import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const Logo = styled(Img)`
  width: 12px;
  height: 12px;
  margin-top: -1px;
  display: block;
`
export const Title = styled.div`
  ${css.cutFrom('60px')};
  color: ${({ isSubscribed }) => (isSubscribed ? '#b4e1e2' : '#a0bebf')};
  font-size: 12px;
  margin-left: 8px;
`
