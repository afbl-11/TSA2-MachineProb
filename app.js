document.addEventListener("DOMContentLoaded", function () {
  const dateButtons = document.querySelectorAll(".date-list button");
  const boxAnimation = document.querySelector(".box-animation");

  dateButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const color =
        getComputedStyle(button).getPropertyValue("background-color");

      const fallingBox = createFallingBox(color);
      boxAnimation.appendChild(fallingBox);

      fallingBox.style.animation = "fallAnimation 2s forwards";

      setTimeout(() => {
        fallingBox.style.animation = "none"; 
        fallingBox.style.transform = "translateY(0)"; 

        void fallingBox.offsetWidth;

        fallingBox.style.animation = "upwardAnimation 2s forwards";

        fallingBox.addEventListener("animationend", () => {
          fallingBox.remove();
        });
      }, 3000); 
    });
  });

  function createFallingBox(color) {
    const fallingBox = document.createElement("div");
    fallingBox.classList.add("falling-box");
    fallingBox.style.backgroundColor = color;
    fallingBox.style.border = "5px solid ${color}"; 
    return fallingBox;
  }
});
