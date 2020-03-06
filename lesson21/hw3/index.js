export function getTitle() {
    return document.querySelector('.title').textContent;
};
getTitle();

export function getDescription() {
    return document.querySelector('.about').innerText;
};
getDescription();

export function getPlans() {
    return document.querySelector('.plans').innerHTML;
}
getPlans();

export function getGoal() {
    return document.querySelector('.goal').outerHTML;
};
getGoal();