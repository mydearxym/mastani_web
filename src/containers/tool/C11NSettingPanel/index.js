/*
 *
 * C11NSettingPanel
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { VIEW } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import { Tabs } from '@/components/Switcher'

import GeneralSettings from './GeneralSettings'
import ThemeSettings from './ThemeSettings'

import { Wrapper, Title, TabBarWrapper, ContentWrapper } from './styles'
import { useInit, tabOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:C11NSettingPanel')

const TAB_OPTIONS = [
  {
    title: '常规设置',
    raw: 'general',
    localIcon: 'settings',
  },
  {
    title: '主题设置',
    raw: 'theme',
    icon: `${ICON_CMD}/theme_cloth.svg`,
  },
]

const Content = ({ activeTab, curTheme, ...restProps }) => {
  switch (activeTab) {
    case 'general': {
      return <GeneralSettings {...restProps} />
    }
    case 'theme': {
      return <ThemeSettings curTheme={curTheme} />
    }
    default: {
      return <div>WoW</div>
    }
  }
}

const C11NSettingPanelContainer = ({ c11NSettingPanel: store }) => {
  useInit(store)

  const { activeTab, accountInfo, curThread, curTheme } = store
  const { customization } = accountInfo

  return (
    <Wrapper testId="c11NSettingPanel">
      <Title>个性化设置</Title>
      <TabBarWrapper>
        <Tabs
          items={TAB_OPTIONS}
          activeKey={activeTab}
          onChange={tabOnChange}
          view={VIEW.DRAWER}
        />
      </TabBarWrapper>
      <ContentWrapper>
        <Content
          activeTab={activeTab}
          curThread={curThread}
          customization={customization}
          curTheme={curTheme}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(C11NSettingPanelContainer)
