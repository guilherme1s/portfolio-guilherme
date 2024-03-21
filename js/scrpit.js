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
    var section = document.getElementById(sectionId);
    
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

getModalHTML.onclick = function() {
    modalHTML.showModal();  
}

getModalCSS.onclick = function() {
    modalCSS.showModal();
}

getModalJS.onclick = function() {
    modalJS.showModal();
}

getModalReact.onclick = function() {
    modalReact.showModal();
}

getModalC.onclick = function() {
    modalC.showModal();
}

getModalPy.onclick = function() {
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
