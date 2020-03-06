export default function getItemsList() {
    let elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList
}
getItemsList();

export default function getItemsArray() {
    let elementsArray = document.querySelectorAll('.tool');
    console.dir(elementsArray);
    return Array.from(elementsArray);
}
getItemsArray();