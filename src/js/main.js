document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  } 

  modalBtn.forEach(element => {
    element.addEventListener('click',switchModal);
  });
  // Закрываю модальное окно через класс modal__close
  closeBtn.addEventListener('click', switchModal);
  // закрываю модальное окно при клике за область модального окна
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.toggle('modal--visible');
    }
  }
  // Удаляю modal--visible при нажатии клавиши esc 
  document.onkeydown = function(event) {
    if(event.key === "Escape" || event.key === "Esc" || event.key === 27) {
      modal.classList.remove('modal--visible');
    }
  } 
});








    

    
    
 