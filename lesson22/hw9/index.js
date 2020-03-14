const page = document.querySelector('.pagination');

function handleClick(event) {
    const paginationPage = event.target.closest('.pagination__page');
    console.log(paginationPage.dataset.pageNumber);
}
page.addEventListener('click', handleClick);