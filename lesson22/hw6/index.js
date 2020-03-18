let btn = document.querySelectorAll('.btn');

function handleClick(event) {
    console.log(event.target.textContent);
}
btn.forEach(elem => {
    elem.addEventListener('click', handleClick);
});