const baseUrl = 'https://5e98af0c5eabe7001681c458.mockapi.io/v1/users';
const userForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const onFormChange = () => {
    errorText.textContent = null;

    if (userForm.reportValidity()) {
        submitBtn.disabled = false;
    }
}
const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = [...new FormData(userForm)]
        .reduce((acc, item) => {
            return {
                [item[0]]: item[1],
                ...acc,
            }
        }, {});
    postUser(formData)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((response) => {
            window.alert(JSON.stringify(response));
            userForm.reset();
            submitBtn.disabled = true;
        }).catch(() => {
            errorText.textContent = 'Failed to create user';
            userForm.reset();
            submitBtn.disabled = true;
        });
}
userForm.addEventListener("input", onFormChange);
userForm.addEventListener("submit", onFormSubmit);

const postUser = (newUserData) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUserData),
    })
};