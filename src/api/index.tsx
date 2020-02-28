// Posts
export const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

// Comments
export const COMMENTS_API = "https://jsonplaceholder.typicode.com/comments";

// Albums
export const ALBUMS_API = "https://jsonplaceholder.typicode.com/albums";

// Photos
export const PHOTOS_API = "https://jsonplaceholder.typicode.com/photos";

// Todos
export const TODOS_API = "https://jsonplaceholder.typicode.com/todos";


// Get Posts from fakeApi
export const getPostsDetails = async () => {
  try {
    const response = await fetch(POSTS_API);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  }
  catch {

  }
}

// Get asked comment from all comments
export const getComment = async (comment: number) => {
  const url = `${COMMENTS_API}/${comment}`
  try {
    const response = await fetch(url);
    console.log("resp is", response)
    if (response.ok) {
      const data = response.json();
      return data;
    }
  }
  catch {

  }
}