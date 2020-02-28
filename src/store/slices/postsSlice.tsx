import { createSlice } from '@reduxjs/toolkit';
import { getPostsDetails } from '../../api';

interface PostsState {
  posts: PostsDetails[];
  isLoading: boolean;
}
interface PostsDetails {
  userId: number;
  id: number;
  body: string;
  title: string;
}
const initialState: PostsState = {
  posts: [],
  isLoading: false
}

function startLoading(state: PostsState) {
  state.isLoading = true;
}
function endLoading(state: PostsState) {
  state.isLoading = false;
}

// Create Posts Slice

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: { // reducers from creeateSlice will give us actionCreators to call from Comp
    getPostsBegin: startLoading,
    getPostsSuccess(state, action) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsError: endLoading
  }
});

export const { getPostsBegin, getPostsSuccess, getPostsError } = postsSlice.actions;

export default postsSlice.reducer;

// Call API here
export const fetchPosts = (): any => async (dispatch: any) => {
  try {
    dispatch(getPostsBegin())
    const postsDetails = await getPostsDetails();
    dispatch(getPostsSuccess(postsDetails));
  }
  catch {
    dispatch(getPostsError())
  }
}



