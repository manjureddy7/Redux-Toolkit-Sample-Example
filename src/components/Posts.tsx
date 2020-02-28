import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/rootReducer';
import { fetchPosts } from '../store/slices/postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state: RootState) => {
    return state.posts
  });

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <>
      <p>Hello from posts comp</p>
      {
        isLoading ?
          <p>Loading count of posts...</p> :
          <p>Total Count of posts are: {posts.length}</p>
      }
    </>
  )
}

export default Posts;