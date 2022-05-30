<?php
    try {
        // modifier les valeurs d'entrées de la bdd si besoin :
        //  // 'mysql:hostname=nomduport;dbname=nomdelabase;charset=codedecaracteres'
        //  // 'nomutilisateur'
        //  // 'motdepasse'
        
        $bdd = new PDO(
            'mysql:hostname=127.0.0.1;dbname=testprojettutore;charset=utf8',
            'root',
            '', 
            array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
        );

    } catch (Exception $e) {
        die('Erreur dans la connexion : '.$e->getMessage());
    }

?> 