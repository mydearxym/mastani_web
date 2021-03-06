import { FC, Fragment } from 'react'

import { SpaceGrow } from '@/components/Common'
import Checker from '@/components/Checker'

import type { TREPORT_ITEM } from '../spec'

import { Option, SelectWrapper, Title } from '../styles/report_content/main'
import { selectItem } from '../logic'

type TProps = {
  items: TREPORT_ITEM[]
  activeItem: TREPORT_ITEM
}

const Main: FC<TProps> = ({ items, activeItem }) => {
  return (
    <Fragment>
      {items &&
        items.map((item) => (
          <Option key={item.raw}>
            <SelectWrapper onClick={() => selectItem(item.raw)}>
              <Checker checked={item.raw === activeItem.raw} />
              <Title active={item.raw === activeItem.raw}>{item.title}</Title>
            </SelectWrapper>
            <SpaceGrow />
          </Option>
        ))}
    </Fragment>
  )
}

export default Main
