"use strict";

// modules
import { getFormObject } from "./modules/get-form-object.js";
import { sendFetch } from "./modules/send-fetch.js";

// constants
const USER_FORM = document.forms.user;

//main
USER_FORM.addEventListener("submit", event=> {
  event.preventDefault();
  window.history.back();
  const obj = getFormObject(USER_FORM),
  sendFetch(USER_FORM.action + "/" + obj.id);
});
