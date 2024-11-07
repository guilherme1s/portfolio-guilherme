const getModalHTML = document.querySelector(".skillHTML");
const getModalCSS = document.querySelector(".skillCSS");
const getModalJS = document.querySelector(".skillJS"); 
const getModalReact = document.querySelector(".skillReact"); 
const getModalC = document.querySelector(".skillsC"); 
const getModalPy = document.querySelector(".skillPy"); 
const closeModals = document.querySelectorAll(".closeModalButton"); 

const modalHTML = document.querySelector(".modalHTML");
const modalCSS = document.querySelector(".modalCSS");
const modalJS = document.querySelector(".modalJS");
const modalReact = document.querySelector(".modalReact");
const modalC = document.querySelector(".modalC");
const modalPy = document.querySelector(".modalPy");

function openMenu() {
    let menuOptions = document.querySelector('.menuNavOptions');
    menuOptions.classList.toggle('show');
}

function closeMenu() {
    let menuOptions = document.querySelector('.menuNavOptions');
    menuOptions.classList.remove('show');
}

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

function openHtmlModal() {
    modalHTML.showModal();  
}

function openCssModal() {
    modalCSS.showModal();
}

function openJsModal() {
    modalJS.showModal();
}

function openReactModal() {
    modalReact.showModal();
}

function openCModal() {
    modalC.showModal();
}

function openPyModal() {
    modalPy.showModal();
}

closeModals.forEach(function(button) {
    button.onclick = function() {
        const openModals = document.querySelectorAll('dialog[open]');
        openModals.forEach(function(modal) {
            modal.close();
        });
    };
});
