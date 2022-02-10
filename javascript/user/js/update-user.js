"use strict";

// modules
//import { getFormObject } from "./modules/get-form-object.js";
//import { sendFetch } from "./modules/send-fetch.js";

const getFormObject = form => {
    const inputs = form.getElementsByTagName("input")
    return Array.prototype.slice.call(inputs).reduce(
        (obj, tag) => {
            obj[tag.name] = tag.value;
            return obj;
        },
        {}
    );
};

const sendFetch = (
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

// constants
const USER_FORM = document.forms.user;
const printResponse = x => console.log(x);

// main
USER_FORM.addEventListener("submit", event => {
  const o = getFormObject(USER_FORM);
  sendFetch(
    USER_FORM.action + "/" + o.id,
    o,
    "PUT",
    printResponse,
    printResponse);
  event.preventDefault();
});
