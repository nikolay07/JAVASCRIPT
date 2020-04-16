const baseUrl = 'https://5e988dc45eabe7001681c309.mockapi.io/users';
const headersJson = { 'Content-Type': 'application/json; charset=utf-8' };
const loginForm = document.querySelector('.login-form');
const formInputs = document.querySelectorAll('.form-input');
const formSubmitBtn = document.querySelector('.submit-button');
const errorTextElem = document.querySelector('.error-text');

const onInputChange = () => {
    formSubmitBtn.disabled = !loginForm.reportValidity()
    errorTextElem.textContent = ''
}

const onSubmitForm = (event) => {
    event.preventDefault()
    const userData = Object.fromEntries([...new FormData(loginForm)])
    sendUserData(userData)
        .then(serverResponse => serverResponse.json())
        .then(responseData => {
            alert(JSON.stringify(responseData));
            [...formInputs].forEach(inputElem => inputElem.value = '')
        })
        .catch(error => {
            error = new Error('Failed to create user');
            errorTextElem.textContent = error;
        })
};

loginForm.addEventListener('input', onInputChange)
formSubmitBtn.addEventListener('click', onSubmitForm)

const sendUserData = (userData) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: headersJson,
        body: JSON.stringify(userData)
    })
};

//sendUserData({ email: email @email.com, firstName: "Vasyl", password: v12345v; })