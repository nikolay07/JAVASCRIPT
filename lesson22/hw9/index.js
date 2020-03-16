const page = document.querySelector('.pagination');
const pageItem = document.querySelectorAll('.pagination__page');


function handleClick(event) {
    // const paginationPage = event.target.closest('.pagination__page');
    // console.log(paginationPage.dataset.pageNumber);

    // for (let i = 0; i < pageItem.length; i++) {
    //     if (event.target === pageItem[i]) {
    //         console.log(pageItem[i].dataset.pageNumber);
    //     }
    // }

    // pageItem.forEach(elem => {
    //     if (elem === event.target) {
    //         console.log(elem.dataset.pageNumber);
    //     }
    // });

    console.log(event.target.dataset.pageNumber);
}
// page.addEventListener('click', handleClick);
pageItem.forEach(elem => {
    elem.addEventListener('click', handleClick);
});