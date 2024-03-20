const inputs = document.querySelectorAll(".forms input");
const button = document.querySelector(".btn-black");
const message=document.querySelector("#para")

button.addEventListener('click', (e)=>{
    e.preventDefault()
    let messages=[]
    validateInputs()
})
const validateInputs=() =>{
    inputs.forEach(function(input){
        if(input.value===''||input.value==null){
input.style.border='1px solid red'
message.textContent='kindly fill all details'
message.style.color='red'
        }
        else{
            input.style.border='none'
message.textContent=''
message.style.color=''
        }
    })
}



