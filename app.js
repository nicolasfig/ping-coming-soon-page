let email = document.querySelector(".email");
let error = document.querySelector(".error");
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let button = document.querySelector(".submit-btn");

let validate = () => {
  console.log();
  if (email.value === "") {
    error.style.display = "block";
    email.classList.add("form-error");
    error.innerHTML = "Whoops! It looks like you forgot to add your email";
  }
  if (!pattern.test(email.value)) {
    error.style.display = "block";
    error.innerHTML = "Please provide a valid email address";
  }
};

button.addEventListener("click", () => {
  validate();
});
