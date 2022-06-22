var btnIcon = $('#btn i')

$('#btn').on('click', function(){
  
  $('body').toggleClass('open')

  if( $('body').hasClass('open') ) {
    btnIcon
    .removeClass('ri-menu-line')
    .addClass('ri-close-line')
  } else {
    btnIcon
    .removeClass('ri-close-line')
    .addClass('ri-menu-line')
  }

})