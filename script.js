const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const audio = new Audio('./audio/punch.mp3');
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 800);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
    console.log(cactusLeft);
  // detect collision
  if (cactusLeft < 130  && dinoTop >= 140) {
    // collision
    audio.play(); 
  }
}, 1);

document.addEventListener("keydown", function (event) {
  jump();
});
document.addEventListener("click", function (event) {
  jump();
});