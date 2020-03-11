export const getSection = num => {
    let arr = Array.from(document.querySelectorAll('span'))
        .reduce((acc, elem) => {
            if (elem.dataset.number == num) {
                acc = elem.closest('div').dataset.section;
            }
            return acc;
        }, '')
    return arr;
}


// for (let i = 0; i < arr.length; i++) {
//     if (+arr[i].dataset.number === num) {
//         return arr[i].closest('div').dataset.section
//     }
// }