<?php

    require '../modele/bdd/Connexion.php';

    require '../controller/form-answer-controller.php';
    require '../modele/managers/ReponseFormulaireManager.php';
    require '../modele/objets/ReponseFormulaire.php';

    require '../modele/managers/PrestataireManager.php';
    require '../modele/objets/Prestataire.php';

    require '../modele/managers/FormulaireManager.php';
    require '../modele/objets/Formulaire.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, origin");

    // On parse l'url pour recupèrer chacun des membres de l'url. 
    // Par exemple ici l'url qui nous permettra de procéder aux requêtes sur les réponses sera donné par : 
    // http://http://127.0.0.1/dashboard/Fintech/api/form-answer.php
    // Il vient que url[4] = form-answer.php
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode('/', $uri);

    // Si on suit le raisonnement nous permettant de récupérer les élèments de l'url, si on a un nombre pour $uri[5], on le stock dans une variable
    $id_form = null;

    if (isset($uri[5])) {
        $id_form = (int) $uri[5];
    }

    // Si on suit le raisonnement nous permettant de récupérer les élèments de l'url, si on a un nombre pour $uri[6], on le stock dans une variable.
    // Notons donc que si l'on a un url du type : http://127.0.0.1/dashboard/Fintech/api/form-answer.php/2/6, cela signifie que l'on souahitera afficher le json correspondant au formulaire 2 et ayant la question 6
    $id_question = null;

    if (isset($uri[6])) {
        $id_question = (int) $uri[6];
    }

    // On récupère le type de requête envoyée, i.e. GET, POST, PUT, DELETE
    $request_method = $_SERVER["REQUEST_METHOD"];

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        // The request is using the POST method
        header("HTTP/1.1 200 OK");
        return;
    
    }

    // En instanciant la classe FormAnswerController, et selon la requête, on executera la requête demandée
    $form_answer_controller = new FormAnswerController($bdd, $request_method, $id_form, $id_question);
    $form_answer_controller->execute_query();

?>