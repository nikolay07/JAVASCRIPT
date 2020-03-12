let checkbox = document.querySelector('.task-status');
const changeCheckbox = () => checkbox.checked ? console.log(true) : console.log(false);
checkbox.addEventListener('change', changeCheckbox);