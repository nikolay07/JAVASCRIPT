let inputIn = document.querySelector('.search__input');
let btn = document.querySelector('.search__btn');
const getInput = () => {
    console.log(inputIn.value);
};
btn.addEventListener('click', getInput);