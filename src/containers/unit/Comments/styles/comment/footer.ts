import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 5px;
`
export const EmotionWrapper = styled.div`
  ${css.flex('align-center')};
`
export const EmotionSelectorIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(16)};
  margin-top: -1px;

  &:hover {
    fill: #00a39a;
    cursor: pointer;
  }

  transition: all 0.25s;
`
