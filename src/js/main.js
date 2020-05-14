
$(document).ready(function () {
    var modal = $('.modal'),
    modalBtn= $('[data-toggle=modal]'),
    modalClose = $('.modal__close');

    modalBtn.on('click', function() {
       modal.toggleClass('modal--visible');

    });
    modalClose.on('click', function() {
      modal.toggleClass('modal--visible');
    });


    

});






	








$(document).ready(function(){
  /**
   * При прокрутке страницы, показываем или срываем кнопку
   */
  $(window).scroll(function () {
      // Если отступ сверху больше 50px то показываем кнопку "Наверх"
      if ($(this).scrollTop() > 500) {
          $('#arrow').fadeIn();
      } else {
          $('#arrow').fadeOut();
      }
  });
  
  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('#arrow').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  
});







    

    
    
 