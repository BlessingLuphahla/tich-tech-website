document.addEventListener("DOMContentLoaded", function () {
  // vars
  var isBoxClosed = true;

  //const
  const whatsappIcon = document.querySelector(".whatsappIcon");
  const whatsappTextBox = document.querySelector(".whatsappTextBox");
  const close = document.querySelector(".whatsappTextBoxClose");
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
    }
  });
});
