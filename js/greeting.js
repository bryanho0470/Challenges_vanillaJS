const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hiddenForm = document.querySelector("#clear-form");
const hiddenBtn = document.querySelector("#clearbtn");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username_key";

function onlogSubmit(tomato) {
  tomato.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS_NAME);
  const username = loginInput.value;
  hiddenBtn.classList.remove(HIDDEN_CLASS_NAME);
  paintGreeting(username);
  localStorage.setItem(USERNAME_KEY, username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS_NAME);
  loginForm.addEventListener("submit", onlogSubmit);
} else {
  hiddenBtn.classList.remove(HIDDEN_CLASS_NAME);
  paintGreeting(savedUsername);
}

function clearLocalStorage() {
  localStorage.clear();
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASS_NAME);
  greeting.innerHTML = `Hello ${username} !`;
}

hiddenForm.addEventListener("submit", clearLocalStorage);
