const stepsKataEl = document.querySelector('#steps-kata');
const singleSteps = [...document.querySelectorAll('#steps-kata li')];

singleSteps.forEach((step) => step.classList.add('invisible'));

const showNextStep = () => {
    singleSteps.shift().classList.remove('invisible');
};

stepsKataEl.addEventListener('click', showNextStep);
stepsKataEl.classList.remove('invisible');
