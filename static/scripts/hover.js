// JavaScript Document
$(document).ready(function(){

var tab=0;
var num=0;
var click=0;
var shover=0;
var stab=0;
var prevclick=0;

$(".tab").click(function(){click=$(this).attr('id');hver();});
$("#home").click(function(){bgreset();});
$("#hospi").click(function(){bgreset();});
$("#spons").click(function(){bgreset();});

$("#set").toggle(function(){$("#cont").css({visibility:"visible",top:'-85px'}).animate({top:'0px'},'500','easeOutBack');},function(){$("#cont").animate({top:'-85px'},'500','easeOutBack');});

$("#container").hover(function(){$(".menu").animate({bottom:'-461px'});$("#cont").animate({top:'-85px'},'500','easeOutBack');});
$("#header").hover(function(){$(".menu").animate({bottom:'-461px'});});
$("#content").hover(function(){$("#cont").animate({top:'-85px'},'500','easeOutBack');});
$(".bbq").hover(function(){$(".menu").animate({bottom:'-461px'});});
$("#stab1").hover(function(){shover=1;shver();},function(){shoverback();});
$("#stab2").hover(function(){shover=2;shver();},function(){shoverback();});
$("#stab3").hover(function(){shover=3;shver();},function(){shoverback();});
$("#stab4").hover(function(){shover=4;shver();},function(){shoverback();});
$("#stab5").hover(function(){shover=5;shver();},function(){shoverback();});
function hver()
{
	$("#content").addClass("back");
	click = click.substr(3,2);
	if(prevclick!=click)
	{
	class2="hovr"+prevclick;
	class3="hovr"+click;
	$("#body").removeClass(class2);
	
	tab=prevclick;
	id1="#menu"+prevclick;
		$(id1).hover(function(){
			$("#body").addClass(class3);
			$("#content").addClass("back");},function(){
      $(id1).animate({bottom:'-461px'});
      $("#body").removeClass(class2);
		});	
	}
	
	id3="#menu"+click;
	id2="#menu"+tab;
	$(id2).animate({bottom:'-461px'});
   $(id3).css({visibility:"visible",bottom:'-320px'}).animate({bottom:'0px'},'500','easeOutBack');
	class1="hovr"+click;
   $("#body").addClass(class1);
   $("#content").addClass("back");
   $("#body").css({'opacity':'0.1'}).fadeTo("slow",1.0);
	prevclick=click;
}

function bgreset()
{
      $("#body").removeClass(class3);
      $("#content").removeClass("back");
}

function shver()
{
	id5="#menu"+shover;
	id6="#menu"+stab;
	$(id6).animate({bottom:'-360px'});
   $(id5).css({visibility:"visible",bottom:'-200px'}).animate({bottom:'0px'});
}

function shoverback()
{  
	   stab=shover;
	   id7="#menu"+shover;
		$(id7).hover(function(){},function(){
			           $(id7).animate({bottom:'-360px'});
                    
		});
}
});
