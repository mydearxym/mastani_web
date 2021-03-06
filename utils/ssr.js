import {
  isEmpty,
  contains,
  merge,
  toLower,
  omit,
  findIndex,
  propEq,
} from 'ramda'

import { DEFAULT_THEME } from '@/config'
import { HCN, TYPE, THREAD } from '@/constant'

import { P } from '@/schemas'

import BStore from './bstore'

/*
 * check if current is on server side
 */
export const isServerSide = typeof window === 'undefined'
export const isClientSide = !isServerSide

// get jwt from cookie or localStorage
// props has to be getInitialProps's arg
export const getJwtToken = (props) => {
  if (isServerSide) return BStore.cookie.from_req(props.req, 'jwtToken')

  return BStore.get('token')
}

export const ssrPagedSchema = (thread) => {
  switch (toLower(thread)) {
    case THREAD.JOB:
      return P.pagedJobs

    case THREAD.REPO:
      return P.pagedRepos

    default:
      return P.pagedPosts
  }
}

export const ssrPagedFilter = (community, thread, filter, userHasLogin) => {
  thread = toLower(thread)

  if (community === HCN && thread === THREAD.JOB) {
    filter = omit(['community'], filter)
    return { filter, userHasLogin }
  }

  return { filter, userHasLogin }
}

const getCurView = (source) =>
  source.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

const getActiveTag = (tagTitle, tagList) => {
  if (!tagTitle || isEmpty(tagList)) return null

  const index = findIndex(propEq('title', tagTitle), tagList)

  if (index < 0) return null
  return tagList[index]
}

export const ssrContentsThread = (resp, thread, filters = {}) => {
  // console.log('filter in resp: ', resp.filter)
  const activeTag = getActiveTag(resp.filter.tag, resp.partialTags)

  switch (toLower(thread)) {
    case THREAD.JOB:
      return {
        jobsThread: {
          pagedJobs: resp.pagedJobs,
          curView: getCurView(resp.pagedJobs),
          activeTag,
          filters,
        },
      }

    case THREAD.REPO:
      return {
        reposThread: {
          pagedRepos: resp.pagedRepos,
          curView: getCurView(resp.pagedRepos),
          activeTag,
          filters,
        },
      }

    default:
      return {
        articlesThread: {
          pagedPosts: resp.pagedPosts,
          curView: getCurView(resp.pagedPosts),
          activeTag,
          filters,
        },
        // postsThread: {
        //   pagedPosts: resp.pagedPosts,
        //   curView: getCurView(resp.pagedPosts),
        //   activeTag,
        //   filters,
        // },
      }
  }
}

export const validCommunityFilters = [
  'page',
  'size',
  'community',
  'tag',
  'length',
  'sort',
  'when',
  'read',
  // jobs spec
  'salary',
  'exp',
  'field',
  'finance',
  'scale',
  'education',
  'source',
]

export const parseTheme = (sessionState) =>
  sessionState.user ? sessionState.user.customization.theme : DEFAULT_THEME
