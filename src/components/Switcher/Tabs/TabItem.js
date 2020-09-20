/*
 *
 * Tabs
 *
 */

import React, { useEffect, useCallback, useRef } from 'react'
import T from 'prop-types'

import { buildLog, isString, Trans } from '@/utils'

import TabIcon from './TabIcon'
import { Wrapper, Label } from '../styles/tabs/tab_item'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const TabItem = ({
  mobileView,
  cardView,
  activeKey,
  item,
  index,
  size,
  onClick,
  setItemWidth,
}) => {
  const ref = useRef(null)
  const clickableRef = useRef(null)

  // set each tab item width for calc
  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0
    setItemWidth(index, width)
  }, [setItemWidth, index])

  const handleWrapperClick = useCallback(() => {
    clickableRef.current.click()
  }, [clickableRef])

  const handleLabelClick = useCallback(
    (e) => {
      e.stopPropagation()
      onClick(index, e)
    },
    [onClick, index],
  )

  return (
    <Wrapper
      ref={ref}
      mobileView={mobileView}
      cardView={cardView}
      size={size}
      onClick={handleWrapperClick}
      active={item.raw === activeKey}
    >
      <Label
        ref={clickableRef}
        onClick={handleLabelClick}
        active={item.raw === activeKey}
      >
        {!isString(item) && (item.icon || item.localIcon) && (
          <TabIcon
            item={item}
            clickableRef={clickableRef}
            active={item.raw === activeKey}
          />
        )}
        {isString(item) ? item : item.alias || Trans(item.title)}
      </Label>
    </Wrapper>
  )
}

TabItem.propTypes = {
  mobileView: T.bool,
  cardView: T.bool,
  item: T.any.isRequired,
  index: T.number.isRequired,
  setItemWidth: T.func.isRequired,
  onClick: T.func.isRequired,
  activeKey: T.string.isRequired,
  size: T.oneOf(['default', 'small']).isRequired,
}

TabItem.defaultProps = {
  mobileView: false,
  cardView: false,
}

export default React.memo(TabItem)
