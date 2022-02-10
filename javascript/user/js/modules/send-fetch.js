"use strict";

export const sendFetch = (
  url,
  obj = {},
  method = "GET",
  action = x => {},
  error = x => {}) => {

  fetch(url, {
    method: method,
    body: JSON.stringify(obj),
    headers: {
      "Accept": "applicatin/json",
      "Content-Type": "application/json"
    }
  })
  .then((response) => {
    const resp = response.status;
    if (method === "GET" && resp === 200
      || method === "POST" && resp === 201
      || method === "PUT" && (resp === 200 || resp === 201 || resp === 204)) {
      return response.json();
    } else {
      throw new Error(resp);
    }
  })
  .then((result) => action(result))
  .catch((exception) => error(exception))
};
