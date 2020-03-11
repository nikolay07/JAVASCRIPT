export const manageClasses = () => {
    document.querySelector('.one').classList.add('selected');
    document.querySelector('.two').classList.remove('selected');
    document.querySelector('.three').classList.toggle('three_done');
    let li = document.querySelector('li:last-child');
    if (li.classList.contains('some-class')) {
        li.classList.add('another-class');
    };
}