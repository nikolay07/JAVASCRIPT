export const addImage = imgSrc => {
    const p = new Promise((resolveCb, rejectCb) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);
        const onImageLoaded = () => {
            const { width, height } = imgElem;
            resolveCb({ width, height });
        }
        imgElem.addEventListener('load', onImageLoaded);
        imgElem.addEventListener('error', () => rejectCb(new Error('Image load failed')));
    });

    return p;
};
const imgSrc = 'https://caricatura.ru/black/korsun/pic/karikatura-vopros_(sergey-korsun)_1597.gif';
addImage(imgSrc)
const result = addImage(imgSrc);
console.log(result);
result.catch(error => console.log(error));
result.then(data => console.log(data));