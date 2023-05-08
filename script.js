"use strict";

document.querySelector(".toggle").addEventListener("click", function () {
  document.querySelector(".container").style.backgroundColor = "#2c202c";
  document.querySelector(".cta").style.backgroundColor = "#f8ecf8";
  document.querySelector(".cta").style.border = "2px solid #e0aae0";
  document.querySelector(".cta").style.color = "#2c202c";
  document.querySelector(".small-content-box").style.backgroundColor =
    "#584058";
  document.querySelector("body").style.color = "#e0aae0";
  document.querySelector(".toggle").style.fill = "#e0aae0";
  document.querySelector(".toggle").style.stroke = "#e0aae0";
  document.querySelector(".profile-link").style.color = "#f8ecf8";
});
