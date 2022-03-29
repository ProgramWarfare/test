"use strict";
function myFunction() {
    var x = document.getElementById("myMenyi");
    if (x.className === "li") {
      x.className += " responsive";
    } else {
      x.className = "li";
    }
  }