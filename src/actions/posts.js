import { APIUrls } from "../helpers/url";
import { ADD_POST, UPDATE_POSTS } from "./actionTypes";
import { getAuthTokenFromLocalStorage, getFormBody } from "../helpers/utils";

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

// important action which will basically sends request to the server via API to create new POST.
export function createPost(content) {
  return (dispatch) => {
    const url = APIUrls.createPost();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);

        if (data.success) {
          // dispatch an action
          dispatch(addPost(data.data.post));
        }
      });
  };
}
