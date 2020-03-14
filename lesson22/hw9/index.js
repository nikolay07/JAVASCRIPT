let btns = document.querySelectorAll('.pagination__page');
let page = document.querySelector('.pagination');
const handleClick = (event) => {
    btns.forEach(elem => console.log(elem));
}
page.addEventListener('click', handleClick);