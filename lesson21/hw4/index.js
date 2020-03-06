const text = 'строка'
export function setTitle(text) {
    return document.querySelector('.title').innerText = text;
};