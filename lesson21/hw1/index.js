export default function getTitleElement() {
    let titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
}


export default function getInputElement() {
    let inputElem = document.querySelector('input[type = "text"]');
    console.dir(inputElem);
    return inputElem;
};