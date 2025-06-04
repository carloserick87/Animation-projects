const nextBtns = document.querySelectorAll(".btn-next");
const prevBtns = document.querySelectorAll(".btn-prev");
const steps = document.querySelectorAll(".form-step");
const progress = document.getElementById("progress");
const stepIndicators = document.querySelectorAll(".progress-setp");

let currentStep = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const inputs = steps[currentStep].querySelectorAll("input");
    let isValid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
      }
    });

    if (!isValid) return;

    currentStep++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep--;
    updateFormSteps();
    updateProgressbar();
  });
});

stepIndicators.forEach((step, index) => {
  step.addEventListener("click", () => {
    currentStep = index;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  steps.forEach((step, idx) => {
    step.classList.remove("form-step-active");
    if (idx === currentStep) {
      step.classList.add("form-step-active");
    }
  });
}

function updateProgressbar() {
  stepIndicators.forEach((step, idx) => {
    step.classList.toggle("progress-step-active", idx <= currentStep);
  });
  progress.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;
}
