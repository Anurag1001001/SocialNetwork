// FILE IMPORT
import {
  ADD_COMMENT,
  ADD_POST,
  UPDATE_POSTS,
  UPDATE_POST_LIKE,
} from "../actions/actionTypes";

// reducer's function(pure function) always take two parameters one is state and another one is action.
export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    case ADD_POST:
      return [action.post, ...state];
    case ADD_COMMENT:
      // Very Interesting hai map function ka implementation here, see  what im doing here is we're matching poast.id === action.post.id agr match hota hai toh uss particular post ko ammend krk return krenge and agr nhi match hota hai toh vaise ka vaisa post return kr denge, ye saara return hoga map function and map function saare returned post ko compile kr k newPost object ko de dega and then newPost object ko hum return kr denge.
      const newPosts = state.map((post) => {
        if (post._id === action.postId) {
          return {
            ...post,
            comments: [action.comment, ...post.comments],
          };
        }
        return post;
      });
      return newPosts;

    case UPDATE_POST_LIKE:
      // Very Interesting hai map function ka implementation here, see  what im doing here is we're matching poast.id === action.post.id agr match hota hai toh uss particular post ko ammend krk return krenge and agr nhi match hota hai toh vaise ka vaisa post return kr denge, ye saara return hoga map function and map function saare returned post ko compile kr k newPost object ko de dega and then newPost object ko hum return kr denge.
      const updatedPosts = state.map((post) => {
        if (post._id === action.postId) {
          return {
            ...post,
            likes: [...post.likes, action.userId],
          };
        }
        return post;
      });
      return updatedPosts;

    default:
      return state;
  }
}
