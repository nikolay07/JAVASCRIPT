const addImageWithPromise = imgSrc => {
    const p = new Promise((resolveImg, resectImg) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);
        const onImageLoaded = () => {
            const { width, height } = imgElem;
            resolveImg({ width, height });
        };
        imgElem.addEventListener('load', onImageLoaded);
        imgElem.addEventListener('error', () => resectImg(new Error('Image load failed')));
    });
    return p;
}
const imgSrc = 'https://caricatura.ru/black/korsun/pic/karikatura-vopros_(sergey-korsun)_1597.gif';

const result = addImageWithPromise(imgSrc);
console.log(result);

// const callback = (error, data) => {
//         if (error) {
//             console.log(error);
//             return;
//         };
//         const { width, height } = data;
//         const sizeElem = document.querySelector('.image-size');
//         sizeElem.textContent = `${width} x ${height}`;
//     }
//addImage(imgSrc, callback);