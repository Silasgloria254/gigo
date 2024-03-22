// const signUp = document.querySelectorAll(".signup__box");
// console.log(signUp);
const inputForm = document.querySelectorAll(".inputSection");
console.log(inputForm);

const inputSystem = document.querySelectorAll(".register-form input");
// console.log(inputSystem);
const messages = document.querySelector(".error");
console.log(messages);
const pressButton = document.getElementById("button");
console.log(pressButton);

console.log(inputSystem)
pressButton.addEventListener("click", (e) => {
  e.preventDefault()
  const user = {};
  let users = [];
  let allValidated = false;
  inputSystem.forEach((input) => {
    if (input.value === "" || input.value === null) {
      messages.textContent = "Fill all the empty fields";
      input.style.border = "1px solid red";
    } else if (
      document.querySelector("input[name=password]").value !==
      document.querySelector("input[name=confirm]").value
    ) {
      document.querySelector("input[name=password]").style.border =
        "1px solid red";
      document.querySelector("input[name=confirm]").style.border =
        "1px solid red";
      messages.textContent = "Password does not match";
    } else if (localStorage.getItem("users") !== null) {
      JSON.parse(localStorage.getItem("users")).forEach((el) => {
        if (el["email"] === input.value) {
          messages.textContent = "Email already exists";
        }
      });
      console.log(messages)
    } else {
      input.style.border = "1px solid black";
      messages.textContent = "";
      if (input.name !== "confirm") {
        user[`${input.name}`] = input.value;
      }
      console.log(messages)
    }
  });

  console.log(user)
  if ((messages.textContent === "")) {
    allValidated = true;
  }

  if ((allValidated === true)) {
    if (localStorage.getItem("users") === null) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem("users"));
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }
    window.location.href = `${window.location.origin}/login.html`;
  }

});
