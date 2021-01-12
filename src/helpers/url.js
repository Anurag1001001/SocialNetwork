// So i make a file inside helper, so jo mai frequently use kr rha hu like fetching somethinig from somewhere so i wrote all those codes here or inside helper.

const API_ROOT = "http://codeial.com:8000/api/v2";

export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  editProfile: () => `${API_ROOT}/users/edit`,
  //   rather than assigning string to 'fetchPosts' i provide a function that returns this URL, also i made this URL dynamic by using function.
  fetchPosts: (page = 1, limit = 5) =>
    `http://codeial.com:8000/api/v2/posts?page=${page}&limit=${limit}`,
};
