const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

// Creating spikes for seconds and minutes
for (let i = 0; i < 60; i += 1) {
  let minSpike = document.createElement("div");
  let secSpike = document.createElement("div");
  (date = new Date()), (minSpike.className = "spike");
  secSpike.className = "secspike";

  minSpike.style = `--rotate:${6 * i}deg`;
  secSpike.style = `--rotate:${6 * i}deg`;
  minSpike.setAttribute("data-i", i);
  secSpike.setAttribute("data-i", i);

  seconds.append(secSpike);
  minutes.append(minSpike);
}

function getTime() {
  let date = new Date(),
    sec = date.getSeconds(),
    min = date.getMinutes();

  hour.textContent = date.getHours();
  minute.textContent = min;
  minutes.style = `--dRotate:${6 * min}deg`;

  if (sec == 0) {
    seconds.classList.add("remove-animation");
  } else {
    seconds.classList.remove("remove-animation");
  }
  if (min == 0) {
    minutes.classList.add("remove-animation");
  } else {
    minutes.classList.remove("remove-animation");
  }
  seconds.style = `--dRotate:${6 * sec}deg`;
}
setInterval(getTime, 1000);
getTime();
