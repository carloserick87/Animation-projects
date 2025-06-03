const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");

let formStepsNum = 0;

nextBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        formSteps++;
        updateFormSteps();
    });
});

function updateFormSteps(){

    formSteps.forEach(formSteps=>{
        formSteps.classList.contains("form-step-active") &&
        formSteps.classList.remove("form-step-active");

    })

    formSteps[formStepsNum].classList.add("form-step-active");
}

