const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-setp");

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        if (formStepsNum < formSteps.length - 1) {
            formStepsNum++;
            updateFormSteps();
            updateProgressBar();
        }
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        if (formStepsNum > 0) {
            formStepsNum--;
            updateFormSteps();
            updateProgressBar();
        }
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep, index) => {
        formStep.classList.remove("form-step-active");
    });
    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressBar() {
    progressSteps.forEach((step, idx) => {
        if (idx <= formStepsNum) {
            step.classList.add("progress-step-active");
        } else {
            step.classList.remove("progress-step-active");
        }
    });

    const progressPercentage = (formStepsNum) / (progressSteps.length - 1) * 100;
    progress.style.width = `${progressPercentage}%`;
}

progressSteps.forEach((step, index) => {
  step.addEventListener("click", () => {
    formStepsNum = index;
    updateFormSteps();
    updateProgressBar();
  });
});
