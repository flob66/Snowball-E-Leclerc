const Session = (p_test) => {
let res = p_test;
           console.log(res);
           var config = {
            type: Phaser.AUTO,
            parent: 'phaser-canvas',
            width: 1000,
            height: 800,
            backgroundColor: '#ffffff',
            scene: {
                preload: preload,
                create: create
            }
        };
        function preload (){
           
          this.load.image('imageclient', './images/'+res);
          this.load.image('perenoel', './img/fond.png');
        }
        var game = new Phaser.Game(config);
        function create ()
        {
            //  This sprite is draggable from any pixel that has an alpha value >= 1
            
        
            //  This sprite is draggable from any pixel that has an alpha value >= 120 (i.e. the left side of the sprite)
            var sprite2 = this.add.sprite(450, 200, 'imageclient').setInteractive({ pixelPerfect: true, alphaTolerance: 120, draggable: true });
            var sprite1 = this.add.sprite(480, 400, 'perenoel').setInteractive({ pixelPerfect: true, draggable: false });
        
            sprite1.on('drag', function (pointer, dragX, dragY) {
        
                this.x = dragX;
                this.y = dragY;
        
            });
        
            sprite2.on('drag', function (pointer, dragX, dragY) {
        
                this.x = dragX;
                this.y = dragY;
        
            });
            document.getElementById('taille').oninput = function(p_evt) {
                var val = p_evt.currentTarget.value;
                console.log(`value = ${val}`);
                sprite2.scale = val;
            };
            
            document.getElementById('tourne').oninput = function(p_evt) {
                var val = p_evt.currentTarget.value;
                console.log(`value = ${val}`);
                 sprite2.angle = val; 

            };
        }
       
             $("#telecharger").click(function(){

game.renderer.snapshot(function (image) {
                image.style.width = '160px';
                image.style.height = '120px';
                document.getElementById("temp").appendChild(image);
                
                image.id = "test";
                console.log(image);
                  let picture = document.getElementById("test");
    let anchor = document.createElement("a");
    anchor.download = "download";
    anchor.href = picture.src;
    anchor.click();
    anchor.remove();
    picture.remove();
            });
        });  
}


