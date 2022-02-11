"use strict";

const DEFAULT_HEADER = {
  "Accept": "applicatin/json",
  "Content-Type": "application/json"
}

const sendPost = (
  url,
  obj = {},
  action = x => {},
  error = x => {},
  header = DEFAULT_HEADER) => {

  fetch(url, {
    method: "POST",
    headers: header
    body: JSON.stringify(obj),
  })
  .then((response) => {
    if (response.status === 201) {
      return response.json();
    } else {
      throw new Error(resp);
    }
  })
  .then((result) => action(result))
  .catch((exception) => error(exception))
};
