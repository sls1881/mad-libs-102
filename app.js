import { spanFill, visibleClass, resetInputs, hiddenClass, showModal, hideModal } from "./utils.js";


const magicButton = document.getElementById('button');
const resetButton = document.getElementById("reset");
const span = document.getElementsByClassName("close")[0];

window.addEventListener("load", () => {
    showModal();
})

magicButton.addEventListener('click', () => {
    spanFill();
    visibleClass();
    hideModal();
    
});

resetButton.addEventListener("click", () => {
    resetInputs();
    hiddenClass();
    showModal();
})
span.addEventListener("click", () => {
    hideModal();
    visibleClass();
})










