$(document).ready(function(){
  var w=$(document).width()/2;
  var h=$(document).height()/2;
  var h1=$(".circle-holder").height()/2;
  var real=h-h1;
  $(".circle-holder").css("margin-top",real);
  
});