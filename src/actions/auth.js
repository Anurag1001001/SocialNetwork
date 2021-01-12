import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_AUTH_STATE,
  EDIT_USER_SUCCESSFUL,
  EDIT_USER_FAILED,
} from "./actionTypes";
import { APIUrls } from "../helpers/url";
import { getAuthTokenFromLocalStorage, getFormBody } from "../helpers/utils";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}
export function loginSucess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    // we can dispatch startlogin() in two ways either from here(like just did) or from startlogin(), we're disptaching this startlogin() coz i want to set value of inProgress, whether my request is "inProgress" or not
    dispatch(startLogin());
    const url = APIUrls.login();
    // By default fetch() request is GET one but i don't wanna make GET request for login, coz its a POST one, so i've to explicitly mention it inside fetch().

    // whatever we're requesting using API from the server it should be in proper format as they expected from the client side so we've to format the data accordingly.
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      // now i should handle all the response which i'm getting as a promise and since the response would be Object i should convert it into .json()
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          // let's store the JWT token which i'll be getting from the server
          localStorage.setItem("token", data.data.token);
          console.log(data.data.token);

          // dispatch action to save user
          dispatch(loginSucess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}
export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}

// Edit user Profile

export function editUserSuccessful(user) {
  return {
    type: EDIT_USER_SUCCESSFUL,
    user,
  };
}
export function editUserFailed(error) {
  return {
    type: EDIT_USER_FAILED,
    error,
  };
}
export function editUser(name, password, confirmPassword, userId) {
  // this is going to be async call coz we're going to request to the server to edit user profile.
  // async call means this should return a function(thunk concept).
  return (dispatch) => {
    const url = APIUrls.editProfile();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({
        name,
        password,
        confirm_password: confirmPassword,
        id: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data Coming from auth.js", data);
        if (data.success) {
          dispatch(editUserSuccessful(data.data.user));

          // as we know that our JWT token contains user information(username,name) so if username changes then we'll get a new access token and we need to store it in order to be login, if user only changes the password, confirmPassword then we'll not get access token.
          if (data.data.token) {
            localStorage.setItem("token", data.data.token);
          }
          return;
        }
        //  if returns Failure then dispatch below action
        dispatch(editUserFailed(data.message));
      });
  };
}
