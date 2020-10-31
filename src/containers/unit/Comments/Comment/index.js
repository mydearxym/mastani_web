import React from 'react'

import { useDevice } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const Comment = (props) => {
  const { isMobile } = useDevice()

  return (
    <React.Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </React.Fragment>
  )
}

export default React.memo(Comment)
