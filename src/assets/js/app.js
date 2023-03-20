// variables / targets:
const showModalBtn = document.querySelector('#show-modal-btn');
const modalScreen = document.querySelector('#modalScreen');
const closeBtn = document.querySelector('#close-btn');

// Event Listeners:
showModalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// FUNCTIONS:

// open modal
function openModal() {

	modalScreen.classList.add('show');

}

// close modal
function closeModal() {

	modalScreen.classList.remove('show');

}