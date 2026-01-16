let todos = [];

const input = document.getElementById("todoInput");
const button = document.getElementById("addButton");
const list = document.getElementById("todoList");

function addTodo() {
  const text = input.value;

const todo = {
  text: text,
  completed: false
};

todos.push(todo);
saveTodos();


  if (text === "") {
    alert("何か入力してね！");
    return;
  }

  const li = document.createElement("li");
li.textContent = todo.text;

if (todo.completed) {
  li.classList.add("completed");
}


  li.addEventListener("click", () => {
  todo.completed = !todo.completed;
  li.classList.toggle("completed");
  saveTodos();
});


  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  deleteButton.addEventListener("click", () => {
  todos = todos.filter(t => t !== todo);
  li.remove();
  saveTodos();
});

  li.appendChild(deleteButton);
  list.appendChild(li);

  input.value = "";
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

button.addEventListener("click", () => {
  addTodo();
});
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
window.addEventListener("load", () => {
  const saved = localStorage.getItem("todos");
  if (saved) {
    todos = JSON.parse(saved);
    todos.forEach(todo => {
      addTodoFromStorage(todo);
    });
  }
});
function addTodoFromStorage(todo) {
  const li = document.createElement("li");
  li.textContent = todo.text;

  if (todo.completed) {
    li.classList.add("completed");
  }

  li.addEventListener("click", () => {
    todo.completed = !todo.completed;
    li.classList.toggle("completed");
    saveTodos();
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  deleteButton.addEventListener("click", () => {
    todos = todos.filter(t => t !== todo);
    li.remove();
    saveTodos();
  });

  li.appendChild(deleteButton);
  list.appendChild(li);
}
