"use strict";

const modal = document.getElementById("modal");
const modalOpenButton = document.getElementById("open-button");
const modalCloseButton = document.getElementById("close-button");

modalOpenButton.addEventListener("click", event => modal.showModal());
modalCloseButton.addEventListener("click", event => modal.close());
