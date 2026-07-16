const input = document.getElementById("task");
const button = document.getElementById("btn");
const taskList = document.getElementById("tasklist");
const doneList = document.getElementById("tasklistdone");

button.addEventListener("click", taskwindow);

function taskwindow() {
  let task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let span = document.createElement("span");
  span.textContent = task;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      doneList.appendChild(li);
    } else {
      taskList.appendChild(li);
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  input.value = "";
  input.focus();
}
