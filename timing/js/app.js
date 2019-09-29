function showCurrentTime() {
  document.querySelector(".current-time").innerText = new Date();
}

function updateDateEverySec() {
  setInterval(showCurrentTime, 1000);
}