import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.article`
  ${css.flexGrow('justify-center')};
  position: relative;
  padding-top: 20px;
  min-height: 300px;

  ${css.media.tablet`
    padding: 8px 0;
  `};
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  max-width: ${css.ARTICLE_PAGE_MAX_WIDTH};
  margin-left: ${css.ARTICLE_CONTENT_OFFSET};
  padding-left: 0;
  padding-right: 0;
`
export const MainWrapper = styled.div`
  flex-grow: 1;
  max-width: ${css.ARTICLE_CONTENT_WIDTH};

  ${css.media.tablet`
    width: 100%;
  `};
`
export const SidebarWrapper = styled.div`
  margin-top: 4px;
`
/* background: ${theme('drawer.articleBg')}; */
export const ArticleWrapper = styled.div`
  font-size: 15px;
  /* background: ${theme('drawer.articleBg')}; */
  /* border-radius: 5px; */
  background: transparent;
  
  min-height: 200px;
`
export const BodyHeaderWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 18px;
`
export const CommentsWrapper = styled.div`
  margin-top: 50px;
`