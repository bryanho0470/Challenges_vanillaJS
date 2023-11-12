const clock = document.querySelector("#clock");

function getClock() {
  const dates = new Date();
  const hours = String(dates.getHours()).padStart(2, "0");
  const minutes = String(dates.getMinutes()).padStart(2, "0");
  const seconds = String(dates.getSeconds()).padStart(2, "0");

  clock.innerText = `Current Time : ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
