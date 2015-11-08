$(function(){

  var photosArray = [],
      photos = $('.photo'),
      length = photos.length;

  for (var i=0;i<photos.length;i++) {
    photosArray.push( photos[i] );
  }

  var slider = window.setInterval(function() {

    var slide = photosArray.pop(),
        num = length - 1;
    $(slide).addClass('off').removeClass('front');
    $(photosArray[0]).addClass('back').removeClass('off');
    photosArray.unshift( slide );
    $(photosArray[num]).addClass('front').removeClass('back');

    console.log( photosArray, photosArray[4] );

  }, 3000);


});
