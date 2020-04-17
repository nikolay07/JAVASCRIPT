const spinner = document.querySelector('.spinner');

function showSpinner() {
    spinner.classList.remove('spinner_hidden');
};

function hideSpinner() {
    spinner.classList.add('spinner_hidden');
};

export { showSpinner, hideSpinner };