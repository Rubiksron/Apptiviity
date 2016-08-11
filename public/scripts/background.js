(function(module) {
  function backgroundSequence() {
    var bgImageArray = ["../images/alki.jpg", "../images/kerryPark.jpg", "../images/magnolia.jpg", "../images/ferry.jpg", "../images/fromFerry.jpg", "../images/olympics.jpg"];
    secs = 4;

    bgImageArray.forEach(function(img){
      new Image().src = img;
    });
    window.clearTimeout();
    var k = 0;
    for (i = 0; i < bgImageArray.length; i++) {
      setTimeout(function(){
        document.documentElement.style.background = "url(" + bgImageArray[k] + ") no-repeat center center fixed";
        document.documentElement.style.backgroundSize ="cover";
      if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }
      }, (secs * 1000) * i)
    }
  }
backgroundSequence();
})(window);
