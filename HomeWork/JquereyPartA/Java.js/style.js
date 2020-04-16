var document=
$(document).ready( function() {

  $("#_hide3").click(function(){
  $("p").hide();
});

$("#_show3").click(function(){
$("p").show();
});

  $("#_toggle3").click( function(){
    $(".container2 div:nth-child(2) p").toggle();
  });

  $("#_html3").click(function() {
    $("p").html("Preheat that <b>Oven!</b>!");
  });
  $("#_css3").click(function(){
    $(".containerB").css("background-color", "red");
  });

  $("header").mouseover(function(){
      $("header p").html("Where did I go?");
  });

  $("header").mouseleave(function() {
    $("header p").html("Ehh.. Lets still bake!");
  });

  });
