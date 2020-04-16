const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');
const allUsers = 'https://5e6b6f91d708a000160b48ba.mockapi.io/api/v1/use';
const headersJson = { 'Content-Type': 'application/json; charset=utf-8' };

const loginForm = document.querySelector('.login-form')
const formInputs = document.querySelectorAll('.form-input')
const formSubmitBtn = document.querySelector('.submit-button')
const errorTextElem = document.querySelector('.error-text')

const onInputChange = (e) => {
    formSubmitBtn.disabled = !loginForm.reportValidity()
    errorTextElem.textContent = ''
}

const onSubmitForm = (e) => {
    e.preventDefault()
    const userData = Object.fromEntries([...new FormData(loginForm)])

    setUserData(userData)
        .then(serverResponse => serverResponse.json())
        .then(responseData => {
            alert(JSON.stringify(responseData));
            [...formInputs].forEach(inputElem => inputElem.value = '')
        })
        .catch(error => {
            errorTextElem.textContent = 'Failed to create user'
        })
}

loginForm.addEventListener('input', onInputChange)
formSubmitBtn.addEventListener('click', onSubmitForm)
    //addNewUser({ email: email @email.com, firstName: "Vasyl", password: v12345v; })