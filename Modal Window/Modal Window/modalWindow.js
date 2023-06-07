// modal can be removed by clicking on the screen or by clicking on cross button or by pressing escape key
'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //notice:to select multiple elements with same class

const openModal = function () {
    // console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');//background blur
}
const closeModal = function () {
    modal.classList.add('hidden');//display:none
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);


btnCloseModal.addEventListener('click', closeModal);//func is not called here,it will be called when clicked

//how overlay is entire screen??
overlay.addEventListener('click', closeModal);

//keyboard events r global event that happens on whole document
document.addEventListener('keydown', function (event) {
    // console.log('A key pressed');
    // console.log(event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})