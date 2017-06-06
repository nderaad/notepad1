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


  var box = document.getElementById('notes');

  document.getElementById('bold').addEventListener('click', function (e) {
      box.focus(); // make it the active element so the command is applied to it
      document.execCommand('bold', false, null); // apply command
  });

  $("#bold").click(function(){
    $("#bold").toggleClass("active");
  });

  $(document).keypress("b" || "B",function(e) {
    if(e.ctrlKey)
      $("#bold").toggleClass("active");
  });


  // var keyCatch = [];
  //
  // $('#notes').on("keypress", function (e) {
  //   keyCatch.push(e.key);
  //   for(i = 0; i<keyCatch.length; i++) {
  //     $('#overlap').text(keyCatch);
  //   }
  // });

  // $('#notes').keypress(function() {
  //     $('#overlap').text($('#overlap').val($(this).val()));
  // });

  // $('#notes').bind('keypress keyup blur', function() {
  //     $('#overlap').text($('#overlap').val($(this).val()));
  // });


  $('#darkforest').on('click', function() {
    $('body').css({'background-image': "url('/images/darkforest.jpg')", 'background-size': 'cover'});
  });

  $('#desk').on('click', function() {
    $('body').css({'background-image': "url('/images/desk.jpeg')", 'background-size': 'cover'});
  });

  $('#space').on('click', function() {
    $('body').css({'background-image': "url('/images/space.jpeg')", 'background-size': 'cover'});
  });

  var textareas = document.getElementsByTagName('textarea');
    var count = textareas.length;
    for(var i=0;i<count;i++){
        textareas[i].onkeydown = function(e){
            if(e.keyCode==9 || e.which==9){
                e.preventDefault();
                var s = this.selectionStart;
                this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
                this.selectionEnd = s+1;
            }
        }
    }


});
