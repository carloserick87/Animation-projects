const nextBtns = document.querySelectorAll(".btn-next");
const prevBtns = document.querySelectorAll(".btn-prev");
const steps = document.querySelectorAll(".accordion-item");
const progress = document.getElementById("progress");
const stepIndicators = document.querySelectorAll(".progress-setp");

let currentStep = 0;

function updateFormSteps(step) {
  steps.forEach((section, index) => {
    section.classList.toggle("active", index === step);
  });

  stepIndicators.forEach((indicator, index) => {
    indicator.classList.toggle("progress-step-active", index <= step);
  });

  progress.style.width = `${(step / (stepIndicators.length - 1)) * 100}%`;
}

// NEXT button
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep === 0) {
      const nameInput = document.getElementById("nombre");
      if (nameInput.value.trim() === "") {
        nameInput.classList.add("error");
        return;
      } else {
        nameInput.classList.remove("error");
      }
    }

    if (currentStep < steps.length - 1) {
      currentStep++;
      updateFormSteps(currentStep);
    }
  });
});

// PREVIOUS button
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateFormSteps(currentStep);
    }
  });
});

// Click en el stepper
stepIndicators.forEach((step, index) => {
  step.addEventListener("click", () => {
    currentStep = index;
    updateFormSteps(currentStep);
  });
});
