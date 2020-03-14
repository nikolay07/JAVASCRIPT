const page = document.querySelector('.pagination');
const handleClick = (event) => {
    const paginationPage = event.target.closest('.pagination__page');
    console.log(paginationPage.dataset.pageNumber);
}
page.addEventListener('click', handleClick);