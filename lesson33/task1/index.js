const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

//https://api.github.com/users/nikola07

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const onSearchUser = () => {

};
showUserBtnElem.addEventListener('click', onSearchUser);