let btns = document.querySelectorAll('.pagination__page');
let page = document.querySelector('.pagination');
const handleClick = (event) => {
    // btns.forEach(elem => {
    //     console.log(elem.dataset.pageNumber)
    //     event.stopPropagation();
    // });
    console.log(event.target.dataset.pageNumber);
}
page.addEventListener('click', handleClick);