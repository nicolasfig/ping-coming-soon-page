let email = document.querySelector(".email");
let error = document.querySelector(".error");
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let button = document.querySelector(".submit-btn");

let validate = () => {
  if (email.value === "") {
    error.style.display = "block";
    email.classList.remove("success-input");
    email.classList.add("form-error");
    error.style.color = "var(--light-red)";
    error.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else if (!pattern.test(email.value)) {
    email.classList.remove("success-input");
    email.classList.add("form-error");
    error.style.display = "block";
    error.style.color = "var(--light-red)";
    error.innerHTML = "Please provide a valid email address";
  } else if (pattern.test(email.value)) {
    email.classList.remove("form-error");
    email.classList.add("success-input");
    error.style.display = "block";
    error.style.color = "var(--green)";
    error.innerHTML = "Thank you for your support!";
  }
};

button.addEventListener("click", () => {
  validate();
});
