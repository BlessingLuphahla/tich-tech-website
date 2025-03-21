const form = document.querySelector(".php-email-form");

const submitButton = document.querySelector(
  ".php-email-form button[type=submit]"
);

const link = "https://express-email-processor.onrender.com/tich";
// const link = "http://localhost:5665/tich"

const postData = async (data) => {
  var res = await fetch(link, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  res = await res.json();
  return res;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const name = form[0].value;
  const email = form[1].value;
  const subject = form[2].value;
  const message = form[3].value;

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields");
    return;
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) {
    alert("Email is invalid!");
    return;
  }

  const data = { name, email, subject, message };
  submitButton.textContent = "Loading...";
  submitButton.style.cursor = "not-allowed";

  const res = await postData(data);
  submitButton.textContent = "Send Message";
  submitButton.style.cursor = "pointer";
  alert(res.message);
  if (res.status === 200) {
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    form[3].value = "";
  }
});
