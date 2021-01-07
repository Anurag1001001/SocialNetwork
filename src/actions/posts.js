

// file import
import {UPDATE_POSTS} from './actionTypes';

export function fetchPosts(){
    return (dispatch) => {
        const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
        fetch(url)
         .then((response) =>{
             return response.json();
         }).then((data) => {
            console.log('data(comoing from action/post.js)', data);
            // since i want to store posts to store, will dispatch an action updatePosts
            dispatch(updatePosts(data.data.posts));
         });
    };

}

export function updatePosts(posts){
    return{
        type: UPDATE_POSTS,
        posts
    }
}