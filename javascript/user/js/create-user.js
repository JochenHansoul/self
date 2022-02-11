"use strict";

// modules
//import { getFormObject } from "./modules/get-form-object.js";
//import { sendFetch } from "./modules/send-fetch.js";

// functions
const printResponse = x => console.log(x);
const printError = x => console.log(x);

// constants
const USER_FORM = document.forms.user;

// main
USER_FORM.addEventListener("submit", event => {
  console.log("u");
  sendPost(
    USER_FORM.action,
    getFormObject(USER_FORM),
    printResponse,
    printError);
  event.preventDefault();
});
