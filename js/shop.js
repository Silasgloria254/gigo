const message = document.querySelector(".message");
console.log(message);
const inputItems = document.querySelectorAll("input");
console.log(inputItems);
document
  .getElementById("productForm")
  .addEventListener("click", function (event) {
    event.preventDefault();
    inputItems.forEach((input) => {
      if (input.value === "" || input.value === null) {
        message.textContent = "Please enter the name and the price";
        input.style.border = "1px solid red";
      }else{
        message.textContent = "";
        input.style.border = "1px solid black"
      }
    });
  });
