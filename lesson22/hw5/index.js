let btn = document.querySelector('.single-use-btn');
const getClick = () => {
    console.log('clicked');
    btn.removeEventListener('click', getClick);

}
btn.addEventListener('click', getClick);