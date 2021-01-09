import { LOGIN_START } from "./actionTypes";
import { APIUrls } from "../helpers/url";
import { getFormBody } from "../helpers/utils";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function login(email, password) {
  return (dispatch) => {
    const url = APIUrls.login();
    // By default fetch() request is GET one but i don't wanna make GET request for login, coz its a POST one, so i've to explicitly mention it inside fetch().

    // whatever we're requesting using API from the server it should be in proper format as they expected from the client side so we've to format the data accordingly.
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    });
  };
}
