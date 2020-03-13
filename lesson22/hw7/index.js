let inputIn = document.querySelector('.text-input');
const getInput = (event) => {
    console.log(event.target.value);
}
inputIn.addEventListener('change', getInput);