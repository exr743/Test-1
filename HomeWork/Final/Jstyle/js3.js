$(document).ready( function(){

$("footer").mouseover(function(){
  $("footer p").html("What Can You Do For Your Music?");
});

$("footer").mouseleave(function() {
  $("footer p").html("What Can I Do For You?");
});


});
