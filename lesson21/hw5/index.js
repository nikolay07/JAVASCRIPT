const buttonText = '<button>button text</button>';
export function setButton(buttonText) {
    return document.querySelector('body').innerHTML = buttonText;
    //return document.querySelector('body').textContent = buttonText;
};