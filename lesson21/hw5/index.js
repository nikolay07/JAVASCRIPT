const buttonText = '<button>button text</button>';
export function setButton(buttonText) {
    document.querySelector('body').innerHTML = buttonText;
    //return document.querySelector('body').textContent = buttonText;
};