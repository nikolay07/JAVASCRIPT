export default function setButton(buttonText) {
    return document.querySelector('body').innerHTML = buttonText;
    //return document.querySelector('body').textContent = buttonText;
};
setButton('<button>button text</button>');