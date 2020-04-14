const listItems = document.querySelectorAll('.list-item');

function handleClick() {
    console.log('click');
}
listItems.forEach(elem => {
    elem.addEventListener('click', handleClick);
});