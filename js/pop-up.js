const popUp = document.querySelector('.pop-up');
const form = document.querySelector('.pop-up__form');
const body = document.querySelector('body');
const inputsReq = document.querySelectorAll('.pop-up__input');

document.querySelector('.header-top__pop-up-btn').addEventListener('click', function () {
  popUp.classList.add('pop-up--open');
  body.style.overflow = 'hidden';
});

document.querySelector('.pop-up__close-btn').addEventListener('click', function () {
  popUp.classList.remove('pop-up--open');
  body.style.overflow = 'visible';
});

popUp.addEventListener('click', function (e) {
  if (!form.contains(e.target)) {
    popUp.classList.remove('pop-up--open');
    body.style.overflow = 'visible';
  }
});

function formAddError(inputReq) {
  inputReq.classList.add('pop-up__input--error');
}

function errorRemove() {
  let errors = form.querySelectorAll('.pop-up__input--error');
  for (let i = 0; i < errors.length; i++) {
    errors[i].classList.remove('pop-up__input--error');
  }
}

form.addEventListener('submit', function (e) {
  errorRemove();
  let message = [];
  for (let inputReq of inputsReq) {
    if (inputReq.value === '' || inputReq.value == null) {
      formAddError(inputReq);
      inputReq.placeholder = 'Поле обязательно для заполнения';
      message.push(',');
    }
  }
  if (message.length > 0) {
    e.preventDefault();
  }
});






