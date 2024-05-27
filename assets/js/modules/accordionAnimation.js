export default function initAccordionAnimation() {
    const accordionList = document.querySelectorAll('[data-animation="accordion"] dt');
    const questionList = document.querySelectorAll('.question');
    function removeAllAnimations() {
        accordionList.forEach((item) => {
            item.classList.remove('activeAnimation');
            if (item.nextElementSibling) {
                item.nextElementSibling.classList.remove('activeAnimation');
            }
        });
        questionList.forEach((question) => {
            question.classList.remove('active');
        });
    }
    accordionList[0].classList.add('activeAnimation');
    accordionList[0].nextElementSibling.classList.add('activeAnimation');
    questionList[0].classList.add('active');
    accordionList.forEach((item, index) => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('activeAnimation');
            removeAllAnimations(); 
            if (!isActive) {
                item.classList.add('activeAnimation');
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.add('activeAnimation');
                }
                questionList[index].classList.add('active');
            }
        });
    });
}
