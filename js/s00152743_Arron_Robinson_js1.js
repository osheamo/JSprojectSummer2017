// JavaScript Document
"use strict";
$(document).ready(function(){
    
    
    //basicStyleChange();
function basicStyleChange(){
    var x = document.getElementById('container');
    x.parentElement.removeChild(x);
}

	//Slinky Menu
    var slinky = $('#menu').slinky({
			title: true,
            resize: true
		});

$(".planet").planetarium({
   autospin: "1000ms", 
   angle: "20deg", 
   glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
   pattern: "img/texture-earth.jpg",
   size: "100x100",
   float: true,
   space: "body",
   ring: false,
   ringColor: "#fff",
   ringAngle: "20deg"
 });
    
$(".planetj").planetarium({
   autospin: "1000ms", 
   angle: "20deg", 
   glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
   pattern: "img/texture-jupiter.jpg",
   size: "100x100",
   float: true,
   space: "body",
   ring: false,
   ringColor: "#fff",
   ringAngle: "20deg"
 });
    
$(".planets").planetarium({
   autospin: "1000ms", 
   angle: "20deg", 
   glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
   pattern: "img/texture-saturn.jpg",
   size: "100x100",
   float: true,
   space: "body",
   ring: true,
   ringColor: "#DAA520",
   ringAngle: "20deg"
 });
    
<!--Scroll bar call-->
    $("#scrollContent").mCustomScrollbar({
        //axis: "x";
    });
    
});