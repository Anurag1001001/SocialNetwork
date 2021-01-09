// this file contains a function that are required in multiple places.

export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakasj%2020123

    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&"); // 'username=aakash&password=12313'
}
