const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
    const onImageLoaded = () => {
        const { width, height } = imgElem;
        callback(null, { width, height });
    };
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => {
        callback('Image load failed');
    });

};
const imgSrc = 'https://caricatura.ru/black/korsun/pic/karikatura-vopros_(sergey-korsun)_1597.gif';
const callback = (error, data) => {
    if (error) {
        console.log(error);
        return;
    };
    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
}
addImage(imgSrc, callback);


// Напишите функцию, которая добавит картинку на страницу и вернет размеры этой картинки
// Основные требования:
// 1. Файл должен экспортировать функцию под именем addImage
// 2. Сигнатура: addImage('https://server.com/image.png', callback), где первый аргумент - адрес
// изображения, callback - функция обратного вызова
// 3. addImage должна добавить в элемент с классом page картинку с указанным адресом
// 4. Когда картинка подгрузиться, то ф-ция callback должна быть вызвана с аргументами (null, {
// width: 200, height: 100 }), где 200 х 100 - размеры загруженной картинки
// 5. Если произошла ошибка при загрузке картинки, то , то ф-ция callback должна быть вызвана с
// текстом 'Image load failed' в первом аргументе