import { APIUrls } from "../helpers/url";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import {
  ADD_FRIEND,
  FETCH_FRIENDS_SUCCESS,
  REMOVE_FRIEND,
} from "./actionTypes";

export function fetchUserFriends(userId) {
  // async call, so return type should be function.
  return (dispatch) => {
    const url = APIUrls.userFriends(userId);
    fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("FRIENDS", data);
        dispatch(fetchFriendsSucces(data.data.friends));
      });
  };
}

export function fetchFriendsSucces(friends) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    friends,
  };
}
export function addFriend(friend) {
  return {
    type: ADD_FRIEND,
    friend,
  };
}
export function removeFriend(userId) {
  return {
    type: REMOVE_FRIEND,
    userId,
  };
}
