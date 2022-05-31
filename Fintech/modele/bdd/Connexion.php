<?php
    try {

        $bdd = new PDO(
            'mysql:hostname=127.0.0.1;dbname=fintech;charset=utf8',
            'root',
            '', 
            array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
        );

    } catch (Exception $e) {
        die('Erreur dans la connexion : '.$e->getMessage());
    }

?> 