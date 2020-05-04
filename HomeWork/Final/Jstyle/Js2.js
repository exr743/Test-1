$(document).ready( function(){

$("footer").mouseover(function(){
  $("footer p").html("(786)-376-5001");
});

$("footer").mouseleave(function() {
  $("footer p").html("Ready to book?");
});


});
