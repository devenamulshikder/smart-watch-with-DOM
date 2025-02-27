const ringButtons = document.querySelectorAll(".ring-button");
for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener("click", function (e) {
    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-purple-600");
      ringButtons[j].classList.add("border-gray-100");
    }
    e.target.classList.add("border-purple-600");
  });
}
