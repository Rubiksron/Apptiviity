(function(module) {
   var aboutController = {};

   aboutController.index = function() {
     $('main > section').hide();
     $('#about').fadeIn();
     aboutController.close();
   };
   aboutController.close = function() {
    $('#closeAbout').click(function(){
      $('#about').hide();
    })
   }
   module.aboutController = aboutController;
})(window);
