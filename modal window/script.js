'use strict';

const modalBtn = document.querySelectorAll('.show-modal');
const  modalWindow = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');



for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', function () {
        modalWindow.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
};


closeModal.addEventListener('click', function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log(`button clicked`);
})

// document.addEventListener('keydown', function (e) {
//     if(e.key === 'Escape')
//     console.log(`escape`);
// })
   
