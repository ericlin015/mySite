
$(document).ready(function(){

	var distanceVer ;
	var distanceHor ;
	var moveVer ;
	var moveHor ;
	var x;
	var y;

  $("#buttonSection").mouseenter(function(){
    x = $("#buttonSection").offset();
    y = $("#backgroundDisplay").offset();
	distanceVer = x.top - y.top;
	distanceHor = x.left - y.left;
	if(distanceVer<=300){
		moveVer = 100 + Math.floor(Math.random()*(440-distanceVer));
		if(distanceHor <=300){
			moveHor = 100 + Math.floor(Math.random()*(440-distanceHor));
			$("#buttonSection").animate({left:"+="+moveHor},{queue:false});
			$("#buttonSection").animate({top: "+="+moveVer},{queue:false});
		}
		else if(distanceHor >300){
			moveHor = 100 + Math.floor(Math.random()*(distanceHor-160));
			$("#buttonSection").animate({left: "-="+moveHor},{queue:false});
			$("#buttonSection").animate({top: "+="+moveVer},{queue:false});
		}
	}
    else if(distanceVer>300){
		moveVer = 100+ Math.floor(Math.random()*(distanceVer - 160));
		if(distanceHor <=300){
			moveHor = 100 + Math.floor(Math.random()*(440-distanceHor));
			$("#buttonSection").animate({left: "+="+moveHor},{queue:false});
			$("#buttonSection").animate({top: "-="+moveVer},{queue:false});
		}
		else if(distanceHor >300){
			moveHor = 100 + Math.floor(Math.random()*(distanceHor-160));
			$("#buttonSection").animate({left:"-="+ moveHor},{queue:false});
			$("#buttonSection").animate({top:"-="+ moveVer},{queue:false});
		}
	}
	$("p").text(moveVer + " " + moveHor + " "+distanceVer+ " " + distanceHor);
  });
  $("#buttonSection").mouseleave(function(){
  	$("#buttonSection").css({opacity:1}); 	
  });
  $(".buttonAnima").click(function(){
  	$("#buttonSection").fadeOut();
  });
  
});

