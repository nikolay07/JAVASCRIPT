export default () => {
    const getTitleElement = () => {
        let titleElem = document.querySelector('.title');
        console.dir(titleElem);
        return titleElem;
    }
    getTitleElement();

    const getInputElement = () => {
        let inputElem = document.querySelector('input[type = "text"]');
        console.dir(inputElem);
        return inputElem;
    };
    getInputElement();
};