import { FC, memo } from 'react'

import type { TPost, TAccount } from '@/spec'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { Wrapper } from '../../styles/mobile_view/index'

type TProps = {
  entry: TPost
  community: string

  onPreview?: (obj: TPost) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const MobileView: FC<TProps> = ({ entry, onPreview, onAuthorSelect }) => {
  return (
    <Wrapper>
      <Header item={entry} onAuthorSelect={onAuthorSelect} />
      <Body item={entry} onPreview={onPreview} />
      <Footer item={entry} />
    </Wrapper>
  )
}

export default memo(MobileView)
