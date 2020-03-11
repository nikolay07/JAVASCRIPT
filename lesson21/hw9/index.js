export const finishForm = () => {
    let password = document.querySelector('input');
    password.setAttribute('type', 'password');

    let login = document.createElement('input');
    login.setAttribute('type', 'text');
    login.setAttribute('name', 'login');
    document.querySelector('.login-form').prepend(login);
};