
$(document).ready(function(){

  $("#buttonSection").mouseenter(function(){
    $("#buttonSection").css({opacity:0.6});
    $("#buttonSection").animate({left:'150px'});
  });
  $("#buttonSection").mouseleave(function(){
  	$("#buttonSection").css({opacity:1}); 	
  });
  $(".buttonAnima").click(function(){
  	$("#buttonSection").fadeOut();
  });
  
});

