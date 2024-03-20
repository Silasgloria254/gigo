const inputs = document.querySelectorAll("input");
console.log(inputs);

const button = document.querySelector(".btn-black");
console.log(button);
const message = document.querySelector(".message");
console.log(message);

button.addEventListener("click", (e) => {
  e.preventDefault();

  const user = {};
  let users = [];
  let allValidated = false;
  inputs.forEach((input) => {
    if (input.value === "") {
      message.textContent = "Fill all the empty fields";
      input.style.border = "1px solid red";
      return;
    } else if (
      document.querySelector("input[name=password]").value !==
      document.querySelector("input[name=confirm]").value
    ) {
      document.querySelector("input[name=password]").style.border =
        "1px solid red";
      document.querySelector("input[name=confirm]").style.border =
        "1px solid red";

      message.textContent = "Password does not match";
    } else if (localStorage.getItem("users") !== null) {
      JSON.parse(localStorage.getItem("users")).forEach((el) => {
        if (el["email"] === input.value) {
          message.textContent = "Email already exists";
        }
      });
    } else {
      if (input.value !== "confirm") {
        user[`${input.name}`] = input.value;
      }
      console.log("wolan");
      message.textContent = "";
      input.style.border = "1px solid black";
      console.log(message);
    }
  });


  if (message.textContent === "") {
    allValidated = true;
    window.location.href = "http://127.0.0.1:5500/login.html";
  }

  if (allValidated === true) {
    if (localStorage.getItem("users") === null) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem("users"));
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
});
