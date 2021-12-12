const buttonOpenModal = document.querySelector('.button-contacts')
const modalFeedback = document.querySelector('.modal-feedback')
const buttonCloseModal = modalFeedback.querySelector('.button-modal');
const feedbackForm = modalFeedback.querySelector('.feedback-form');

const openPopup = () => {
  buttonOpenModal.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalFeedback.classList.remove('hidden');
    closePopup();
    sendForm();
  })
}

const closePopup = () => {
  buttonCloseModal.addEventListener('click', (evt) => {
    modalFeedback.classList.add('hidden');
  })
}

const sendForm = () => {
  feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    alert('Сообщение успешно отправлено');
    modalFeedback.classList.add('hidden');
  })
}

openPopup();




