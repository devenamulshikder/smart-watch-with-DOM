const ringButtons = document.querySelectorAll(".ring-button");
for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener("click", function (e) {
    const color = e.target.id.replace("-color", "");
    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-purple-600");
      ringButtons[j].classList.add("border-gray-100");
    }
    e.target.classList.add("border-purple-600");
    const productImage = document.getElementById("product-image");
    productImage.src = `../images/${color}.png`;
  });
}

const selectWristSize = function (size) {
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    const button = document.getElementById("size-" + sizes[i]);
    console.log(button);
    const element = sizes[i];
    if (size === element) {
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
    }
  }
};
