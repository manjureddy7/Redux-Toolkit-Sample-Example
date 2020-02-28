import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment } from '../store/slices/commentSlice';
import { RootState } from '../store/rootReducer';

const Comment = () => {

  const [commentNumber, setCommentNumber] = useState(1);
  const dispatch = useDispatch();
  const { commentDetails } = useSelector((state: RootState) => state.comment)

  return (
    <>
      <p>Pass comment number and get comment details!</p>
      <input type="text" onChange={(e) => setCommentNumber(parseInt(e.target.value))} />
      <button onClick={() =>
        dispatch(fetchComment(commentNumber))
      }>Get Me {commentNumber}th comment</button>
      <p>The comment is: {commentDetails.name}</p>
    </>
  )
}

export default Comment;