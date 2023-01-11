$( document ).ready(function() {
	$("#source").draggable();
// let ctx = document.querySelector("#phaser-canvas canvas").getContext("2d");
// ctx.fillRect(0, 0, 100, 100);
// ctx.fillRect(50, 50, 100, 100);

let canva = document.getElementById("c");
let ctx1 = canva.getContext("2d");
let image = document.getElementById("source");
ctx1.drawImage(image, 0, 0);

 $("#télecharger").click(function(){
//   document.querySelector("#phaser-canvas canvas")


    let canvas = document.querySelector("#phaser-canvas canvas");
    let anchor = document.createElement("a");
    anchor.download = "download";
    anchor.href = canvas.toDataURL("image/png");
    anchor.click();
    anchor.remove();
        }); 
});


// // // const Session = (p_test) => {
// // // let res = p_test;
// // //         // function test(res){
// // //            console.log(res);
// // //            var config = {
// // //             type: Phaser.AUTO,
// // //             parent: 'phaser-canvas',
// // //             width: 800,
// // //             height: 600,
// // //             backgroundColor: '#ffffff',
// // //             scene: {
// // //                 preload: preload,
// // //                 create: create
// // //             }
// // //         };
// //         function preload (){
           
// //            this.load.image('imageclient', './images.jpg');
// //         }
// //         var game = new Phaser.Game(config);
// //         function create ()
// //         {
// //             //  This sprite is draggable from any pixel that has an alpha value >= 1
            
        
// //             //  This sprite is draggable from any pixel that has an alpha value >= 120 (i.e. the left side of the sprite)
// //             var sprite2 = this.add.sprite(400, 400, 'imageclient').setInteractive({ pixelPerfect: true, alphaTolerance: 120, draggable: true });
      
       
        
// //             sprite2.on('drag', function (pointer, dragX, dragY) {
        
// //                 this.x = dragX;
// //                 this.y = dragY;
        
// //             });
// //             // document.getElementById('taille').oninput = function(p_evt) {
// //             //     var val = p_evt.currentTarget.value;
// //             //     console.log(`value = ${val}`);
// //             //     sprite2.scale = val;
// //             // };
// //         }
// //         // document.getElementById('taille').onclick = function() {
// //         //     ?.download;
// //         // };
// //         // }
        
// //       $("#télecharger").click(function(){
          
// // //   document.querySelector("#phaser-canvas canvas")
// //     let canvas = document.querySelector("#phaser-canvas canvas");
// //     let anchor = document.createElement("a");
// //     anchor.download = "download";
// //     anchor.href = canvas.toDataURL("image/png");
// //     anchor.click();
// //     anchor.remove();
// //         });  
// // }





// // // function preload ()
// // // {
// // //     this.load.image('fond', 'fond.png');
// // //     this.load.image('imageclient', './images/'+res);
// // // }



