import React, { FC, ReactNode, memo } from 'react'

import type { TSwipeOption } from '../spec'
import AddOn from '../AddOn'

import { DrawerOverlay, DrawerWrapper, DrawerContent } from '../styles'
import { closeDrawer } from '../logic'

type TProps = {
  testid?: string
  options: TSwipeOption
  visible: boolean
  rightOffset: string
  type: string
  children: ReactNode
}

const DesktopView: FC<TProps> = ({
  testid = 'drawer-sidebar-panel',
  options,
  visible,
  rightOffset,
  type,
  children,
}) => {
  return (
    <React.Fragment>
      <DrawerOverlay visible={visible} onClick={() => closeDrawer()} />
      <DrawerWrapper
        testid={testid}
        visible={visible}
        rightOffset={rightOffset}
        type={type}
        mobile={false}
        options={options}
      >
        <AddOn type={type} />
        <DrawerContent>{children}</DrawerContent>
      </DrawerWrapper>
    </React.Fragment>
  )
}

export default memo(DesktopView)
