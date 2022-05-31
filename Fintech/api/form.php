<?php

    require '../modele/bdd/Connexion.php';

    require '../controller/form-controller.php';

    require '../adapter/form-adapter.php';

    require '../modele/managers/PaysManager.php';
    require '../modele/objets/Pays.php';

    require '../modele/managers/PrestataireManager.php';
    require '../modele/objets/Prestataire.php';

    require '../modele/managers/SecteurActiviteManager.php';
    require '../modele/objets/SecteurActivite.php';

    require '../modele/managers/FormulaireManager.php';
    require '../modele/objets/Formulaire.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // On parse l'url pour recupèrer chacun des membres de l'url. 
    // Par exemple ici l'url qui nous permettra de procéder aux requêtes sur les réponses sera donné par : 
    // http://http://127.0.0.1/dashboard/Fintech/api/form.php
    // Il vient que url[4] = form.php
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode('/', $uri);

    // Si on suit le raisonnement nous permettant de récupérer les élèments de l'url, si on a un nombre pour $uri[5], on le stock dans une variable
    $id_form = null;
    $form = null;
    $id_client = null;


    if (isset($uri[5])) {

        if ($uri[5] === "adapt") {
            $form = (string) $uri[5];

            if (isset($uri[6])) {
                $id_client = (int) $uri[6];
            }

        } else {
            $id_form = (int) $uri[5];
        }
    }

    // On récupère le type de requête envoyée, i.e. GET, POST, PUT, DELETE
    $request_method = $_SERVER["REQUEST_METHOD"];

    // En instanciant la classe FormController, et selon la requête, on executera la requête demandée
    $form_controller = new FormController($bdd, $request_method, $id_form, $form, $id_client);
    $form_controller->execute_query();

?>