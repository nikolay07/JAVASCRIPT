const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

function onCounterChange(e) {
    isBtn = e.target.classList.contains('counter__button');

    if (!isBtn) return;

    const action = e.target.dataset.action;
    const oldVelue = Number(counterValueElem.textContent);

    const newValue = action === 'decrease' ?
        oldVelue - 1 :
        oldVelue + 1;

    localStorage.setItem('counterValue', newValue);
    counterValueElem.textContent = newValue;

}

counterElem.addEventListener('click', onCounterChange);

function onStorageChange(event) {
    counterValueElem.textContent = event.newValue;
}
window.addEventListener('storage', onStorageChange);


function onDocumentLoaded() {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}
document.addEventListener('DOMContentLoaded', onDocumentLoaded);