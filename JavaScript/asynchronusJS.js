// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log("Api not fetching"))
//   .finally(console.log("finally"));

// try {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));
// } catch (error) {
//   console.log(error);
// } finally {
// }

// let arr = [1,2,3,4,5]

// let arr2 = [6,7,8,9,10]

// arr.push(...arr2);
// console.log(arr);

let obj = {
  name:"John",
  age:25
}

let obj2 = {
  city:"Buldana",
  state:"Maharashtra"
}

obj = {...obj,...obj2}
console.log(obj);



// async function apiCall() {
//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await resp.json();
//     // console.log(data);
//     arr.push(...data);
//     console.log(arr);
    
//   } catch (error) {
//     console.log(error);
//   }
// }

// apiCall()
// console.log(arr);
