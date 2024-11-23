const inputField = document.getElementById("inputField");
const textContainer = document.getElementById("textContainer");

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const bubbleText = document.createElement("span");
    bubbleText.textContent = inputField.value;

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "✕";
    closeButton.style.color = "red";
    closeButton.addEventListener("click", function () {
      textContainer.removeChild(bubble);
    });

    bubble.appendChild(bubbleText);
    bubble.appendChild(closeButton);

    textContainer.appendChild(bubble);

    inputField.value = "";

    textContainer.scrollTop = textContainer.scrollHeight;
  }
});
