$(document).ready(function() {
  $('.menu').popup({
  inline   : true,
  hoverable: true,
  position : 'bottom right',
  setFluidWidth: false,
  delay: {
    show: 200,
    hide: 100
   }
  });

  $('#darkforest').on('click', function() {
    $('body').css({'background-image': "url('/images/darkforest.jpg')", 'background-size': 'cover'});
  });

  $('#desk').on('click', function() {
    $('body').css({'background-image': "url('/images/desk.jpeg')", 'background-size': 'cover'});
  });

  $('#space').on('click', function() {
    $('body').css({'background-image': "url('/images/space.jpeg')", 'background-size': 'cover'});
  });


});
