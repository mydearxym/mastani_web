/*
 *
 * Comments
 *
 */

import React from 'react'

import { pluggedIn, buildLog } from '@/utils'
import Modal from '@/components/Modal'

import CommentEditor from './CommentEditor'
import List from './List'
import CommentReplyEditor from './CommentReplyEditor'
import LockedMessage from './LockedMessage'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit, createComment, onReplyEditorClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Comments')

type TProps = {
  comments: TStore
  ssr?: boolean
  locked?: boolean
  onCreate?: () => void
}

const CommentsContainer: React.FC<TProps> = ({
  comments: store,
  ssr = false,
  locked = false,
  onCreate = log,
}) => {
  useInit(store, ssr, locked)

  const {
    pagedCommentsData,
    referUsersData,
    accountInfo,
    showReplyBox,
    showReplyEditor,
    showReplyPreview,
    mentionListData,
    isEdit,
  } = store

  return (
    <Wrapper>
      <Modal show={showReplyBox} onClose={onReplyEditorClose}>
        {showReplyBox && (
          <CommentReplyEditor
            isEdit={isEdit}
            show={showReplyEditor}
            accountInfo={accountInfo}
            referUsers={referUsersData}
            restProps={{ ...store }}
            mentionList={mentionListData}
            showReplyPreview={showReplyPreview}
          />
        )}
      </Modal>

      {locked ? (
        <LockedMessage />
      ) : (
        <CommentEditor
          onCreate={createComment(onCreate)}
          accountInfo={accountInfo}
          referUsers={referUsersData}
          mentionList={mentionListData}
          restProps={{ ...store }}
        />
      )}

      <List
        accountInfo={accountInfo}
        pagedComments={pagedCommentsData}
        restProps={{ ...store }}
      />
    </Wrapper>
  )
}

export default pluggedIn(CommentsContainer) as React.FC<TProps>
