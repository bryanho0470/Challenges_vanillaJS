const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector(".todo_container");

const TODOS_KEY = "todos";
let todos = [];

function todoDel(event) {
  const delli = event.target.parentElement;
  console.log(delli);
  renewedTodos = sessionStorage.getItem(TODOS_KEY);
  parsedTodos = JSON.parse(renewedTodos);
  newTododata = parsedTodos.filter((todo) => todo.id !== parseInt(delli.id));
  sessionStorage.setItem(TODOS_KEY, JSON.stringify(newTododata));
  delli.remove();
}

function saveTodo() {
  sessionStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
  // this is a tag of li
  const check_box = document.createElement("label");
  const check_input = document.createElement("input");
  const check_span = document.createElement("span");
  const text_span = document.createElement("span");
  const delButton = document.createElement("button");

  check_box.id = newTodo.id;
  check_box.setAttribute("class", "todo_set");
  check_input.setAttribute("type", "checkbox");
  check_span.setAttribute("class", "checkmark");
  delButton.innerText = "Del";
  check_box.appendChild(check_input); // attach under of li tag. not to whole HTML
  check_box.appendChild(check_span);
  check_box.appendChild(text_span);
  check_box.appendChild(delButton);

  text_span.innerText = newTodo.content;
  todoList.appendChild(check_box);
  delButton.addEventListener("click", todoDel);
}

function handletodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; // newTodo is not blank
  todoInput.value = "";
  const newTodoObj = {
    content: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  saveTodo();
  paintTodo(newTodoObj);
}

todoForm.addEventListener("submit", handletodoSubmit);

const savedTodos = sessionStorage.getItem(TODOS_KEY);

if (savedTodos === null) {
  handletodoSubmit();
} else {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach((item) => paintTodo(item)); // this is same with forEach(paintTod);
}
