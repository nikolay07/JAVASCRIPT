export const addImageV2 = imageSrc => {
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

addImageV2(imgSrc)
    .then(data => console.log(data))
    .catch(error => console.log(error));