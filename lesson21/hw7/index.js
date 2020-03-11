export const createButton = (buttonText) => {
    let btn = document.createElement('button');
    btn.innerHTML = buttonText;
    document.querySelector('body').append(btn);
};