<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
    <link href="font.css" rel="stylesheet">
    <link href="form.css" rel="stylesheet">
    <link href="header.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="header.js"></script>
    <link rel="icon" href="./img/Logo-carre.png" />
</head>
<body>
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
        <h1>Bravo, tu peux essayer le costume du père Noël !</h1>
        <h2>Donne lui ton nom et prénom dans les cases, coche le petit carré, puis appuies sur le bouton envoyer.</h2>
    <div id="form">
    <form method="post" action="trait.php" enctype="multipart/form-data" class="formulaire" id="main-form">
        <label for="nom">Ton nom :</label>
            <input type="text" size="20" maxlength="40" name="nom" /><br><br>
        <label for="nrenom">Ton prenom :</label>
            <input type="text" size="20" maxlength="40" name="prenom" /><br><br>
        <label for="image">Ton image :</label>
            <input type="file" name="image">
        <br><br>
            <input type="checkbox" id="rgpd" name="rgpd" value="rgpd">
        <label for="rgpd" id="rgpd-label">En cochant cette case, vous accepter de nous confier vos données, et confirmez avoir lu notre 
            <a href="RGPD.html" target="_blank">politique de confidentialité</a>, conforme au Règlement Général sur la Protection des Données (RGPD)
        </label>
        <br><br><br>
            <input type="submit" value="Envoyer" name="r" id="envoyer"/>
    </form>
    <br>
    <!--<form action="mailto:" method="post" enctype="text/plain" class="formulaire" id="btn-mail">-->
    <!--        <input type="submit" value="Ouvrir boite mail">-->
    <!--</form>-->
    </div>
    </main>
    </div>
    <div id="portrait">
        <img src="./img/turn.gif" alt="gif téléphone" id="turn">
    </div>
</body>
</html>