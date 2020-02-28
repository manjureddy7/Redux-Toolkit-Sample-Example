import { createSlice } from '@reduxjs/toolkit';
import { getComment } from '../../api';

interface CommentDetails {
  postId: string | number;
  id: string | number;
  name: string;
  email: string;
  body: string;
}
interface InitialState {
  isLoading: boolean;
  commentDetails: CommentDetails
}
const initialState: InitialState = {
  commentDetails: {
    postId: '',
    id: '',
    name: '',
    email: '',
    body: ''
  },
  isLoading: false
}
const startLoading = (state: InitialState) => {
  state.isLoading = true;
};

const stopLoading = (state: InitialState) => {
  state.isLoading = false;
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getCommentBegin: startLoading,
    getCommentSuccess(state, action) {
      state.commentDetails = action.payload;
      state.isLoading = false;
    },
    getCommentError: stopLoading
  }
});

export const { getCommentBegin, getCommentSuccess, getCommentError } = commentSlice.actions;
export default commentSlice.reducer;

export const fetchComment = (commentNumber: number) => async (dispatch: any) => {
  try {
    dispatch(getCommentBegin());
    const getCommentDetails = await getComment(commentNumber);
    dispatch(getCommentSuccess(getCommentDetails));
  }
  catch {
    dispatch(getCommentError());
  }

}