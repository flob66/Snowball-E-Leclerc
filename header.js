$(document).ready(function(){
    
var iWindowsSize = $(window).width();
var ouvert = false;
    if (iWindowsSize  < 1024){
        $(".cadeau").click(function(){
            if (ouvert === false){
                
                $("#fig-couvercle").animate({top: '-5%'});
                setTimeout(function(){
                $("#couvercle").animate({marginLeft: '15%'});
                }, 200 );
                $('#couvercle').animate(
            { deg: 27 },
            {
            duration: 200,
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
            }
        );
       
            setTimeout(function(){
             $("#bazar").toggle();
            $("#bazar").animate({width: '10%',right: '15%',top: '-5%'});
            }, 500 );
            // $("#bazar").animate({});
            // $("#bazar").animate({});
            
            
            
                $("#logo-plat").animate({marginLeft: '-60.5%'});
            setTimeout(function(){
                $("#logo-carre").toggle();
                $("#logo-plat").toggle();
            }, 700 );
            setTimeout(function(){
                $("#menu").toggle();
                $("#menu").animate({top: '14%'});
            }, 1200 );
            ouvert = true;
    } //fin if ouvert = false
    
    else if (ouvert === true){
        $("#bazar").animate({width: '1%',right: '12%',top: '6.5%'});
            setTimeout(function(){
            $("#bazar").toggle();
            }, 500 );
            
            setTimeout(function(){
                $("#couvercle").animate({marginLeft: '0%'});
                setTimeout(function(){
                $("#fig-couvercle").animate({top: '1%'});
                }, 800 );
                $('#couvercle').animate(
            { deg: 0 },
            {
            duration: 1000,
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
            }
        );
            }, 900 );
        
        
       setTimeout(function(){
            $("#logo-plat").toggle();
            $("#logo-carre").toggle();
            $("#logo-plat").animate({marginLeft: '0%'});
       }, 600 );
        setTimeout(function(){
            $("#menu").animate({top: '-90%'});
        }, 200 );
        setTimeout(function(){
            $("#menu").toggle();
        }, 600 );
        ouvert = false;
    }//fin else
    }); //fin click
} //fin media query
   
   if (iWindowsSize  > 1024){
       $(".cadeau").click(function(){
            if (ouvert === false){
                
                $("#fig-couvercle").animate({top: '-5%'});
                setTimeout(function(){
                $("#couvercle").animate({marginLeft: '15%'});
                }, 200 );
                $('#couvercle').animate(
            { deg: 27 },
            {
            duration: 200,
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
            }
        );
       
            setTimeout(function(){
             $("#bazar").toggle();
            $("#bazar").animate({width: '10%',right: '15%',top: '-5%'});
            }, 500 );
            // $("#bazar").animate({});
            // $("#bazar").animate({});
            
            
            
                $("#logo-plat").animate({marginLeft: '-60.5%'});
            setTimeout(function(){
                $("#logo-carre").toggle();
                $("#logo-plat").toggle();
            }, 700 );
            setTimeout(function(){
                $("#menu").toggle();
                $("#menu").animate({top: '14%'});
            }, 1200 );
            ouvert = true;
    } //fin if ouvert = false
    
    else if (ouvert === true){
        $("#bazar").animate({width: '1%',right: '12%',top: '6.5%'});
            setTimeout(function(){
            $("#bazar").toggle();
            }, 500 );
            
            setTimeout(function(){
                $("#couvercle").animate({marginLeft: '0%'});
                setTimeout(function(){
                $("#fig-couvercle").animate({top: '1%'});
                }, 800 );
                $('#couvercle').animate(
            { deg: 0 },
            {
            duration: 1000,
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
            }
        );
            }, 900 );
        
        
       setTimeout(function(){
            $("#logo-plat").toggle();
            $("#logo-carre").toggle();
            $("#logo-plat").animate({marginLeft: '0%'});
       }, 600 );
        setTimeout(function(){
            $("#menu").animate({top: '-90%'});
        }, 200 );
        setTimeout(function(){
            $("#menu").toggle();
        }, 600 );
        ouvert = false;
    }//fin else
    }); //fin click
   } //fin media query
   
  });// fin document ready function