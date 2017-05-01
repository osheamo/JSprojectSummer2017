/*jshint browser:true, devel:true, strict:true*/

//sources: http://rubentd.com/gifplayer/
//https://scrollrevealjs.org/
//http://alizahid.github.io/slinky/
        

$(document).ready(function(){
    
    //ScrollReveal Plugin: Controls how content is revealed when scrolling through the page.
    window.sr = ScrollReveal();
    sr.reveal('#container',{delay:0,duration:1000});
    var x1 = $('.clear').eq(0);
    var x2 = $('.clear').eq(1);
    var x3 = $('.clear').eq(2);
    var x4 = $('.clear').eq(3);
    sr.reveal(x1,{delay:100, duration:1000, reset:true, viewFactor:0.4});
    sr.reveal(x2,{delay:100, duration:1000, reset:true, viewFactor:0.4});
    sr.reveal(x3,{delay:100, duration:1000, reset:true, viewFactor:0.4});
    sr.reveal(x4,{delay:100, duration:1000, reset:true, viewFactor:0.4});
    
    
    //gifplayer plugin: Control how client can interact with gifs on a page like on 9gag or facebook
    //allows the user to play or stop gifs.
    $('#spaceGIF1').gifplayer({label : "Gif", //defines the label in the center of the preview image.
                              playOn : "click", //defines when the gif plays
                              mode : "gif", //defines wether media is video or gif
                              gif : "images/S00165311-Nauris_Eidulis/space.gif", //defines the source of gif
                              scope : "first-quarter", //defines the scope, eg. if 2 gifs are in same scope, only 1 will be played at a time
                              wait : false // defines wether to wait for the gif to load before playing(true) or not (false)
                             });
    $('#spaceGIF2').gifplayer({label : "Gif",
                              playOn : "click",
                              mode : "gif",
                              gif : "images/S00165311-Nauris_Eidulis/space_2.gif",
                              scope : "first-quarter",
                              wait : false
                             });
    $('#spaceGIF3').gifplayer({label : "Gif",
                              playOn : "hover",
                              mode : "gif",
                              gif : "images/S00165311-Nauris_Eidulis/space_3.gif",
                              scope : "second-quarter",
                              wait : false
                             });
    $('#spaceGIF4').gifplayer({label : "Gif",
                              playOn : "hover",
                              mode : "gif",
                              gif : "images/S00165311-Nauris_Eidulis/space_4.gif",
                              scope : "second-quarter",
                              wait : false
                             });
    
    //Slinky Menu
    var slinky = $('#menu').slinky({
			title: true,
            resize: true
		});
    
    
        var options = {
       //globeBackColor: "#73514F55",
       globeBackColor: "#396A92aa",
       globeFrontColor: "#9AB4CBbb",
       globeLinesColor: "#00000044",

//       width:1920,
//       height:996,

       rotationIdleSpeedFactor: 10.0,
       rotationSpeedFactor: 1.5,
       wave: false
    };

    var globe = new Globe(document.getElementById("3DView"),options);

    var img = new Image();
    var items = [];
    img.onload = function() {

       // basic test usage
       globe.addImage(48.8566667, 2.3509871, img);
       globe.addImage(48.8566667, 2.3509871, img);
       globe.addImage(48.8566667, 2.3509871, img);
       globe.addImage(48.8566667, 2.3509871, img);
       globe.addImage(48.8566667, 2.3509871, img);
       globe.addImage(48.8566667, 2.3509871, img);
       globe.addImage(48.8566667, 2.3509871, img);

       // check it's in the tree
       if (globe.items.children.length !== 7) {
          alert("Should be 7, and is " + globe.items.children.length);
       }
       globe.dispose();
       if (globe.items.children.length !== 0) {
          alert("Should be 0, and is " + globe.items.children.length);
       }

       items.push(globe.addImage(48.8566667, 2.3509871, img));
       // check it's in the tree
       if (globe.items.children.length !== 1) {
          alert("Should be 1, and is " + globe.items.children.length);
       }
       items[0].dispose();
       // check it's not in the tree
       if (globe.items.children.length !== 0) {
          alert("Should be 0, and is " + globe.items.children.length);
       }
    };
    img.src = "images/S00165311-Nauris_Eidulis/item.png";

    window.setInterval(function() {
          globe.addImage(48.8566667, 2.3509871, img, { color: [ 1.0, 0.2, 1.0, 0.4] }, function() { osg.log("Hit itemID " + this.itemID ); } );
       }, 5000);
});