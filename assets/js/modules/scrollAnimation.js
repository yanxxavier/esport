export default function InitAnimationScroll() {
    const sections = document.querySelectorAll('[data-animation = "scroll"]');
    const windowHeight = window.innerHeight * 0.6


    function animationScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const activeClass = (sectionTop - windowHeight) < 0;

            if(activeClass) {
                section.classList.add('animation-scroll')
            }else {
                section.classList.remove('animation-scroll')
            }
        })
    }
    animationScroll()

    window.addEventListener('scroll', animationScroll)
}



