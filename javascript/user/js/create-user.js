"use strict";

// modules
import { getFormObject } from "./modules/get-form-object.js";
import { sendFetch } from "./modules/send-fetch.js";

// functions
const printResponse = x => console.log(x);

// constants
const USER_FORM = document.forms.user;
const USER_FORM_BUTTON = document.getElementById("submit-button");
console.log(USER_FORM_BUTTON);

// main
USER_FORM_BUTTON.addEventListener("click", event=> {
  event.preventDefault();
  window.history.back();
  sendFetch(
    USER_FORM.action,
    getFormObject(USER_FORM),
    USER_FORM.method,
    printResponse,
    printResponse);
});
