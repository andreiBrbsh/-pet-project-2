'use strict';




// burger 
const container = document.querySelector('#header-container');
document.addEventListener('click', (e) => {
        const burger = document.querySelector('.header__logo-burger');
        const menuBody = document.querySelector('.menu__list');
        
        if(e.composedPath().includes(burger)) {
                container.classList.toggle('active');
        } else if (!e.composedPath().includes(burger) && !e.composedPath().includes(menuBody)) {
                container.classList.remove('active');
        }
})



// acciordion 
openContent('.continue__reading', 'open');

function openContent(buttonCollection, toggledClassName) {
        const accordionButtons = document.querySelectorAll(buttonCollection);
        [...accordionButtons].forEach((item) => {
                item.addEventListener('click', () => {
                        item
                        .previousElementSibling
                        .classList
                        .toggle(toggledClassName);
                });
});
}

