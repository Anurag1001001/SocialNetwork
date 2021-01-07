
// FILE IMPORT 
import { UPDATE_POSTS } from "../actions/actionTypes";

// reducer's function(pure function) always take two parameters one is state and another one is action.
export default function posts(state = [],action){ 
    switch (action.type) {
        case UPDATE_POSTS:
            return action.posts;    
        default:
            return state;
    }
}