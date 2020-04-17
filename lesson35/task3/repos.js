const listElem = document.querySelector('.repo-list');

function renderRepos(reposList) {
    const reposListElems = reposList
        .map(({ name }) => {
            const listElem = document.createElement('li');
            listElem.classList.add('repo-list__item');
            listElem.textContent = name;

            return listElem;
        });
    cleanReposList();
    listElem.append(...reposListElems);
};

function cleanReposList() {
    listElem.innerHTML = '';
}

export { renderRepos, cleanReposList };