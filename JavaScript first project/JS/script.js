"use strict";

// let countEl = document.getElementById("count-el").innerText = count;

let count = 0;

function increment() {
  count++;
  document.getElementById("count-el").innerText = count;
}

function decrement() {
  if (count > 0) {
    count--;
  }

  document.getElementById("count-el").innerText = count;
}
