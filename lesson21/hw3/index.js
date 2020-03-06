export default function getTitle() {
    console.log(document.querySelector('.title').textContent);
    return document.querySelector('.title').textContent;
};
getTitle();

export default function getDescription() {
    console.log(document.querySelector('.about').innerText);
    return document.querySelector('.about').innerText;
};
getDescription();

export default function getPlans() {
    console.log(document.querySelector('.plans').innerHTML);
    return document.querySelector('.plans').innerHTML;
}
getPlans();

export default function getGoal() {
    console.log(document.querySelector('.goal').outerHTML);
    return document.querySelector('.goal').outerHTML;
};
getGoal();