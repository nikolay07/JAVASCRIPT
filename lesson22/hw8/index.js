let checkbox = document.querySelector('.task-status');
const getCheck = (event) => {
    if (event.target.value = checkbox.checked) {
        console.log(true);
    } else { console.log(false); }
}
checkbox.addEventListener('change', getCheck);