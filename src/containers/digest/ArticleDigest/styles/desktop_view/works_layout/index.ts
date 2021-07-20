import styled from 'styled-components'

import Img from '@/Img'
import { theme, css, WIDTH } from '@/utils'

export const Main = styled.div<{ metric: string }>`
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
`
export const WorksWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Intro = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const Cover = styled(Img)`
  ${css.size(85)};
  border-radius: 4px;
  margin-right: 20px;
`
export const Title = styled.div`
  font-size: 26px;
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 12px;
`
export const Other = styled.div`
  ${css.flex('justify-between', 'align-end')};
`
export const Actions = styled.div`
  ${css.flex('align-center')};
`
export const SubWrapper = styled.div`
  ${css.flex('align-start', 'justify-center')};
  width: ${WIDTH.ARTICLE.STICKER};

  ${css.media.laptopL`
    width: ${WIDTH.ARTICLE.STICKER_LAPTOPL};
  `}
`
export const BottomInfo = styled.div`
  ${css.flex('align-end', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  margin-top: 15px;
  padding-bottom: 36px;
  border-bottom: 1px solid;
  border-bottom-color: #004251;
  width: 100%;
`
export const AuthorName = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`