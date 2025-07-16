const loveLetter = document.getElementById("loveLetter");

loveLetter.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight - 50 + "px";
  heart.style.background = getRandomColor();

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

function getRandomColor() {
  const colors = ["#ff69b4", "#ff4d6d", "#ff85a2", "#f87171", "#f472b6"];
  return colors[Math.floor(Math.random() * colors.length)];
}
