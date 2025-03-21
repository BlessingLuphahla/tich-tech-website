// vars
var isBoxClosed = true;

//const
const whatsappIcon = document.querySelector(".whatsappIcon");
const whatsappTextBox = document.querySelector(".whatsappTextBox");
const close = document.querySelector(".whatsappTextBoxClose");
const whatsappTextBoxLowerButton = document.querySelector(
  ".whatsappTextBoxLowerButton"
);
// listeners

close.addEventListener("click", () => {
  if (!isBoxClosed) {
    whatsappTextBox.style.display = "none";
  }
  isBoxClosed = true;
});

whatsappIcon.addEventListener("click", () => {
  if (isBoxClosed) {
    whatsappTextBox.style.display = "block";
    isBoxClosed = false;
  } else {
    whatsappTextBox.style.display = "none";
    isBoxClosed = true;
  }
});

whatsappTextBoxLowerButton.addEventListener("click", () => {
  const phoneNumber = "+353 83 485 8956";
  const message = "Hi Tich ";

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
});
