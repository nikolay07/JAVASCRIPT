const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');
const allUsers = 'https://5e6b6f91d708a000160b48ba.mockapi.io/api/v1/use';
const headersJson = { 'Content-Type': 'application/json; charset=utf-8' };

const isValidity = () => {
    if (loginForm.reportValidity()) {
        submitBtn.disabled = false;
    }
}
loginForm.addEventListener('input', isValidity);
const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(loginForm)]
        .reduce((acc, arr) => ({...acc, [arr[0]]: arr[1] }), {});
    addNewUser(formData)
        .then(response => response.json())
        .then(user => {
            alert(JSON.stringify(user));
            loginForm.reset();
            submitBtn.disabled = true;
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
            loginForm.reset();
            submitBtn.disabled = true;
        });
};
loginForm.addEventListener('submit', onFormSubmit);

const addNewUser = user => {
    return fetch(allUsers, {
        method: 'POST',
        headers: headersJson,
        body: JSON.stringify(user),
    });
};
//addNewUser({email: email@email.com, firstName: "Vasyl", password: v12345v;})