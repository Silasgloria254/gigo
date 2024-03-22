
const form = document.querySelector("#inputAppllication");
// console.log(form);
const messages = document.querySelector(".error");
console.log(messages);
const inputForm = document.querySelectorAll(".inputSection");
console.log(inputForm);
const inputSystem = document.querySelectorAll("inputAppllication");

// const inputItems = document.querySelectorAll("input");
// console.log(inputItems);
const pressButton = document.getElementById("button");
console.log(pressButton);
console.log(inputSystem)
pressButton.addEventListener("click", (e) => {
  e.preventDefault();
  let allValidated = false;
  inputSystem.forEach((input) => {
    if (input.value === "" || input.value === null) {
      messages.textContent = "Fill all the empty Fields";
      input.style.border = "1px solid red";
    } else {
      input.style.border = "1px solid black";
      messages.textContent = "";
    }
  });
  if (messages.textContent === "") {
    allValidated = true;
  }
  emailjs.init({
    publicKey: "GViTeWTaPSLgeXCUp",
  });
  emailjs.sendForm("service_hauz55j", "contact form", form).then(
    () => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});