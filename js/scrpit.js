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