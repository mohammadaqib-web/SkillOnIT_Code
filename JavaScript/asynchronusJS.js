'[1,2,3,4]'
{[1,2,3,4]}
// let val = [];

function apiCall() {
  const api = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
}

async function apiCall() {
  try {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!api.ok) {
      return console.log("api failed");
    }
    const data = await api.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

let seconds = 0
let minutes = 0
let hours = 0

setInterval(()=>{
    if(seconds===60){
        minutes+=1
        seconds=0
    }
    seconds+=1
    if(minutes===60){
        hours+=1
        minutes=0
    }
    console.log(`${hours}:${minutes}:${seconds}`);
},1000)

// setInterval(() => {
//   const date = new Date();
//   console.log(date.getHours(), date.getMinutes(), date.getSeconds());
// }, 1000);

// console.log("before calling fn");

// // apiCall();
// setTimeout(() => {
//   console.log("setTimeout");
// }, 1000);

// setInterval(() => {
//   console.log("setInterval");
// }, 1000);

// console.log("after calling fn");

