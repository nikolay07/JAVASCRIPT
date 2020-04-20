import { fetchUserData, fetchRepositories } from './gateways.js'
import { renderUserData } from './user.js'
import { renderRepos, cleanReposList } from './repos.js'
import { showSpinner, hideSpinner } from './spinner.js'

const defaultUser = {
    avatar_url: `https://avatars3.githubusercontent.com/u10001`,
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

async function onSearchUser() {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    try {
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const repoList = await fetchRepositories(userData.repos_url);
        renderRepos(repoList);
    } catch (error) {
        alert(err.message);
    } finally {
        hideSpinner();
    }
};

showUserBtnElem.addEventListener('click', onSearchUser);