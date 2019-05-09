var loadFish = true;

$(document).ready(function(){
  setTimeout(function() {
    $('.enter').addClass('show');
  }, 1000);

  $('video').click(function(){
     $('video')[0].muted ^= 1;  // Toggle mute 1/0
     $(this).toggleClass('mute unmute');
  });

  setTimeout(function() {
    $('.next').addClass('show');
  }, 5000);

  for(var i=0; i<1000; i++) {
    setTimeout(function(i) {
      fishes();
    }, i*100);
  }

});


// var fish_image = "<img src='./Intro_EverettCollection_FindingNemo.jpg' class='pop-fish'></img>""

function fishes() {
    var left = Math.round((Math.random()*1000));
    var top = Math.round((Math.random()*1000));
    $('.image_container').append("<img src=\"Intro_EverettCollection_FindingNemo.jpg\" class=\"pop-fish\" style=\"top: "+top+"px; left: "+left+"px;\"></img>");
}
