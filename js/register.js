const signUp = document.querySelectorAll(".signup__box");
console.log(signUp);
const inputSystem = document.querySelectorAll("input");
console.log(inputSystem);
const messages = document.querySelector(".message");
console.log(messages);
const pressButton = document.getElementById("button");
console.log(pressButton);
pressButton.addEventListener("click", () => {
  const user = {};
  let users = [];
  let allValidated = false;
  inputSystem.forEach((input) => {
    if (input.value === "") {
      messages.textContent = "Kindly fill in all the details";
      input.style.border = "1px solid red";
    } else if (
      document.querySelector(".password").value !==
      document.querySelector(".confirm").value
    ) {
      messages.textContent = "Passwords do not patch";
      input.style.border = "1px solid red";
    } else {
      user[`${input.name}`] = input.value;
      messages.textContent = "";
      input.style.border = "1px solid black";
    }
  });

  if (messages.textContent === "") {
    if (localStorage.getItem("users") === null) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem("users"));
      users.push(users);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
});
