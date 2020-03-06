export function getTitle() {
    //console.log(document.querySelector('.title').textContent);
    return document.querySelector('.title').textContent;
};
getTitle();

export function getDescription() {
    //console.log(document.querySelector('.about').innerText);
    return document.querySelector('.about').innerText;
};
getDescription();

export function getPlans() {
    // console.log(document.querySelector('.plans').innerHTML);
    return document.querySelector('.plans').innerHTML;
}
getPlans();

export function getGoal() {
    //console.log(document.querySelector('.goal').outerHTML);
    return document.querySelector('.goal').outerHTML;
};
getGoal();