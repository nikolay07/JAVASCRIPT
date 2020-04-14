const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

//https://api.github.com/users/nikola07
function fetchUserData(userName) {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => {
            if (response.status === 403) {
                setTimeout(() => {
                    return response.json()
                }, 3000);

            }
            return response.json()
        })

}
const renderUserData = userData => {
    const { avatar_url, name, location } = userData;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location ?
        `from ${location}` :
        '';

}

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const onSearchUser = () => {
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(userData => renderUserData(userData))
};
showUserBtnElem.addEventListener('click', onSearchUser);