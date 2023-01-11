<?php
if (isset($_POST['r'])) {
    if ($_POST['rgpd'] == true) {
$Nom = $_POST['nom'];
$Prenom = $_POST['prenom'];
$i = $_FILES['image']['name'];
$extension = pathinfo($i, PATHINFO_EXTENSION);
$_FILES['image']['name'] = hash('md5',session_id().microtime()).".".$extension;
$imgname = $_FILES['image']['name'];
session_start();
$_SESSION["imagename"] = $imgname;
$_SESSION["nom"] = $Nom;
$_SESSION["prenom"] = $Prenom;


$link = mysqli_connect("localhost","florianbar_Leclerc","Flo6rian!","florianbar_SAE_Noel") ;
$sql = "INSERT into images (nom,prenom,imgname) value ('$Nom','$Prenom','$imgname')";
$res = mysqli_query($link, "SET NAMES 'utf8'");
$res = mysqli_query($link, $sql) or die(mysqli_error($link));

if (move_uploaded_file($_FILES['image']['tmp_name'], "images/".$_FILES['image']['name'])){
				
    header('Location: afficher.php'); 
     
}
}
else{
	echo "<br><h2><b>Envoi annulé, RGPD non validé</b></h2>";
	echo "<a href='form.php'><button>Retour</button></a>";
}
}
?>   