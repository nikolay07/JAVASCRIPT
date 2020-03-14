let page = document.querySelector('.pagination');
const handleClick = (event) => {
        const paginationPage = event.target.closest('.pagination__page');
        if (!paginationPage) {
            return;
        }
        console.log(paginationPage.dataset.pageNumber);
    }
    //page.addEventListener('click', handleClick);