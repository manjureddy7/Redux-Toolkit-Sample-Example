import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import commentReducer from './slices/commentSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  comment: commentReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;