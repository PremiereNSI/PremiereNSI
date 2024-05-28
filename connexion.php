<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $identifiant = $_POST['identifiant'];
    $motdepasse = $_POST['motdepasse'];

    // Utilisateur dédié pour l'exemple
    $user = 'admin';
    $pass = 'password';

    // Vérification des identifiants
    if ($identifiant === $user && $motdepasse === $pass) {
        $_SESSION['user'] = $identifiant;
        header("Location: amon_compte.php"); // Redirection vers une autre page après connexion
        exit();
    } else {
        $error = "Identifiant ou mot de passe incorrect";
        header("Location: connexion.html?error=" . urlencode($error));
        exit();
    }
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Méthode non autorisée";
}
?>