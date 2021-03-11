import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  position: relative;
  padding-bottom: 20px;
  padding-left: 3px;
`
export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 65%;
  height: 1px;
  background: #014454;
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-top: 5px;
`
export const BtnWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 5px;
`
export const BtnText = styled.div`
  padding: 2px 5px;
`