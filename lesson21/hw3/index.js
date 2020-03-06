export default () => {
    function getTitle() {
        console.log(document.querySelector('.title').textContent);
        return document.querySelector('.title').textContent;
    };
    getTitle();

    function getDescription() {
        console.log(document.querySelector('.about').innerText);
        return document.querySelector('.about').innerText;
    };
    getDescription();

    function getPlans() {
        console.log(document.querySelector('.plans').innerHTML);
        return document.querySelector('.plans').innerHTML;
    }
    getPlans();

    function getGoal() {
        console.log(document.querySelector('.goal').outerHTML);
        return document.querySelector('.goal').outerHTML;
    };
    getGoal();
};