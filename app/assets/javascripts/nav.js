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

Navigation.prototype.init = function(){
  this.navButton();
  $('.dropdown-list').hide();
}
