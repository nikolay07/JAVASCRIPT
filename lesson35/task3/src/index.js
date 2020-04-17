import { fetchUserData, fetchRepositories } from './gateways.js'
import { renderUserData } from './user.js'
import { renderRepos, cleanReposList } from './repo.js'

const defaultUser = {
    avatar_url: `https://avatars3.githubusercontent.com/u10001`,
    name: '',
    location: '',
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const spinner = document.querySelector('.spinner');

const showSpinner = () => spinner.classList.remove('spinner_hidden');
const hideSpinner = () => spinner.classList.add('spinner_hidden');

const onSearchUser = () => {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(userData => {
            renderUserData(userData);
            return userData.repos_url;
        })
        .then(url => fetchRepositories(url))
        .then(reposList => {
            renderRepos(reposList);
            hideSpinner();
        })
        .catch(err => {
            hideSpinner();
            alert('Failed to load data');
        })
};
showUserBtnElem.addEventListener('click', onSearchUser);