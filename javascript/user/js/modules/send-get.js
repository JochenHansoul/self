"use strict";

const DEFAULT_HEADER = {
  "Accept": "applicatin/json",
  "Content-Type": "application/json"
}


const sendGet = (
  url,
  action = x => {},
  error = x => {},
  header = DEFAULT_HEADER) => {

  fetch(url, {
    headers: header
  })
  .then((response) => {
    const resp = response.status;
    if (resp === 200 || resp === 304) {
      return response.json();
    } else {
      throw new Error(resp);
    }
  })
  .then((result) => action(result))
  .catch((exception) => error(exception))
};
