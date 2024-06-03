

export default function initModal() {
    const modalBox = document.querySelector('[data-modal="box"]');
    const closeBtn = document.getElementById('close');
    const openBtn = document.getElementById('openModal');
    function openModal () {
        modalBox.classList.add('ativo')
    }
    function closeModal () {
        modalBox.classList.remove('ativo')
    }
    function outsideClose(event) {
        if(event.target === this) {
        closeModal() 
        }
        
    }

    openBtn.addEventListener('click',openModal)
    closeBtn.addEventListener('click', closeModal)
    modalBox.addEventListener('click', outsideClose)
}






