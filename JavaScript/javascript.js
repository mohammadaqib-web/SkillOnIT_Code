let hour1 = document.querySelector("#hour-1");
let hour2 = document.querySelector("#hour-2");

let min1 = document.querySelector("#min-1");
let min2 = document.querySelector("#min-2");

let sec1 = document.querySelector("#sec-1");
let sec2 = document.querySelector("#sec-2");

function clock() {
  let date = new Date();

  if (!date.getHours().toString()[1]) {
    hour1.innerText = 0;
    hour2.innerText = date.getHours().toString()[0];
  } else {
    hour1.innerText = date.getHours().toString()[0];
    hour2.innerText = date.getHours().toString()[1];
  }

  if (!date.getMinutes().toString()[1]) {
    min1.innerText = 0;
    min2.innerText = date.getMinutes().toString()[0];
  } else {
    min1.innerText = date.getMinutes().toString()[0];
    min2.innerText = date.getMinutes().toString()[1];
  }

  if (!date.getSeconds().toString()[1]) {
    sec1.innerText = 0;
    sec2.innerText = date.getSeconds().toString()[0];
  } else {
    sec1.innerText = date.getSeconds().toString()[0];
    sec2.innerText = date.getSeconds().toString()[1];
  }
}

setInterval(() => {
  clock();
}, 1000);
