function Navigation(){
}

Navigation.prototype.navButton = function(){

  $('.bar-icon').on('click',function(){
    var x = this.closest('nav');
    x = $(x).find($('.dropdown-list'));
    if($(x).css('display') == 'none'){
      $('.dropdown-list').fadeIn(200);
    } else {
      $('.dropdown-list').fadeOut(200);
    }
  })
}

Navigation.prototype.notTop = function(){
  $(document).scroll(function() {
   if($(window).scrollTop() > 50) {
     $("div.nav-div-small").css("background-color","rgb(175,181,171,.5)");
   }
   if($(window).scrollTop() <= 50) {
     $("div.nav-div-small").css("background-color","transparent");
   }
  });
}

Navigation.prototype.init = function(){
  this.navButton();
  this.notTop();
  $('.dropdown-list').hide();
}
