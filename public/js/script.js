const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcons = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => { 
    dropdownMenu.classList.toggle('open');
    
    const isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcons.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;

    if(windowWidth > 992) {
        dropdownMenu.classList.remove('open');
        toggleBtnIcons.classList = 'fa-solid fa-bars';
    }
});