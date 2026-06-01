let a = 10
let b = "Uddesh"

let inputBox = document.querySelector("#input-task");
let btn = document.querySelector("#add-btn");
let ul = document.querySelector("#task-list");

btn.addEventListener("click", () => {
  if (inputBox.value === "") {
    return alert("Input box cannot be empty");
  }

  let list = document.createElement("li");
  list.innerText = inputBox.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  list.append(delBtn);

  let compBtn = document.createElement("button");
  compBtn.innerText = "Completed";
  list.append(compBtn);

  compBtn.addEventListener("click", () => {
    list.style.textDecoration = "line-through";
  });

  delBtn.addEventListener("click", () => {
    list.remove();
  });

  ul.append(list);
  inputBox.value = "";
});
