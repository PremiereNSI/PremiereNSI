<?php
session_start();
if(!isset($_SESSION['user'])) {
    header("Location: connexion.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de Bord</title>
</head>
<body>
    <header>
        <h1>Bienvenue, <?php echo htmlspecialchars($_SESSION['user']); ?>!</h1>
        <a href="logout.php">Se Déconnecter</a>
    </header>
    <main>
        <p>Contenu protégé par connexion.</p>
    </main>
</body>
</html>