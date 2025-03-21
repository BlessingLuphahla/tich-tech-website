const form = document.querySelector(".php-email-form");

const submitButton = document.querySelector(
  ".php-email-form button[type=submit]"
);

// const link = "https://express-email-processor.onrender.com/tich"
const link = "http://localhost:5665/tich"

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
  const res = await postData(data);
  alert(res);
});
