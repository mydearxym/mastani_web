import React from 'react'

import ArticleAuthorCard from '@/containers/unit/ArticleAuthorCard'
import ContentSourceCard from '@/components/ContentSourceCard'

import CompanyCard from './CommunityCard'
import { Wrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <CompanyCard data={data} />
    <ArticleAuthorCard user={data.author} />
    <ContentSourceCard data={data} />
  </Wrapper>
)

export default React.memo(SideCards)
