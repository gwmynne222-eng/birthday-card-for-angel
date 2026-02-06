const candle = document.getElementById("candle");
const message = document.getElementById("message");
const music = document.getElementById("bg-music");

let opened = false;

candle.addEventListener("click", () => {
  if (!opened) {
    message.classList.add("show");
    opened = true;
  }

  // memastikan musik jalan di HP
  music.play();
});
