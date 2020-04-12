const addImageV2 = imageSrc => {
    const addImage = new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.setAttribute('alt', 'User avatar');
        img.src = imageSrc;

        const pageElem = document.querySelector('.page');
        pageElem.append(img);

        const onImageLoaded = () => {
            const { width, height } = img;
            resolve({ width, height });
        }

        img.addEventListener('load', onImageLoaded);
        img.addEventListener('error', () => reject(new Error('Image load failed')));
    });
    return addImage;
}
const imgSrc = 'https://ru.wikipedia.org/wiki/PNG#/media/%D0%A4%D0%B0%D0%B9%D0%BB:PNG_transparency_demonstration_1.png';
addImageV2(imgSrc)
    .then(data => console.log(data))
    .catch(error => console.log(error));