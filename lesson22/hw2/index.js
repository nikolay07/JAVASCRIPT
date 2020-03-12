let input = document.querySelector('.text-input');
const changeInput = () => {
    console.log(input.value);
}
input.addEventListener('change', changeInput);