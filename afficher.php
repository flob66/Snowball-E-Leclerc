<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="main.css" rel="stylesheet">
    <title>Formulaire</title>
    <link href="font.css" rel="stylesheet">
    <link href="header.css" rel="stylesheet">
    <link href="main.css" rel="stylesheet">
    <link rel="icon" href="./img/Logo-carre.png" />
</head>
<body>

    
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script src="header.js"></script>
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"></script>
<br><br>
<script src="js.js"></script>
<script>
    $(document).ready(function() {
        Session('<?=$_SESSION["imagename"];?>');
    });
</script>
<div id="paysage">
    <div id="bazar"><p><b>including versions of Lorem Ipsum.</b></p></div>
    <header>
        <nav id="menu">
            <ul>
                <a href="#"><li>Histoire</li></a>
                <a href="#"><li>Jeux concours</li></a>
                <a href="#"><li>Catalogue</li></a>
                <a href="#"><li>Recettes</li></a>
            </ul>
        </nav>
        <figure id="logo-plat">
            <img src="./img/Logo-plat.png" alt="logo-Leclerc-plat" id="logo-plat-img">
        </figure>
        <figure id="logo-carre">
            <img src="./img/Logo-carre.png" alt="logo-Leclerc-carre" id="logo-carre-img">
        </figure>
        
         <figure class="cadeau"> 
            <img src="./img/base_cadeau.png" alt="base_cadeau" id="base_cadeau">
         </figure> 
         <figure class="cadeau" id="fig-couvercle"> 
            <img src="./img/couvercle.png" alt="couvercle" id="couvercle">
         </figure> 
    </header>
    <main>
        <?php echo "<h1>Bonjour " . $_SESSION["prenom"]. " " .$_SESSION["nom"]. ", as-tu été sage cette année ?</h1>";?>
    <div id="contour">
    <div id="int">    
    <input type="range" id="taille" name="taille" min="0.5" max="3" step="0.01">
    <label for="taille">Taille de ton image</label>
    <input type="range" id="tourne" name="tourne" min="0.5" max="360" step="0.01">
    <label for="tourne">Tourne ton image</label>
    <br><br>
  <div id="phaser-canvas"></div>
  <br><br><br>
  <button id="telecharger" class="bouton">Télecharger</button>
  </div>
  </div>
  <br><br>
  <div id="temp"></div>
  </main>
  </div>
  <div id="portrait">
        <img src="./img/turn.gif" alt="gif téléphone" id="turn">
    </div>
</body>
</html>
