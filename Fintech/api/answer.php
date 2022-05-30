<?php

    require '../modele/bdd/Connexion.php';

    require '../controller/answer-controller.php';
    require '../modele/managers/ReponseManager.php';
    require '../modele/objets/Reponse.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // On parse l'url pour recupèrer chacun des membres de l'url. 
    // Par exemple ici l'url qui nous permettra de procéder aux requêtes sur les réponses sera donné par : 
    // http://http://127.0.0.1/dashboard/Fintech/api/answer.php
    // Il vient que url[4] = answer.php
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode('/', $uri);

    // Si on suit le raisonnement nous permettant de récupérer les élèments de l'url, si on a un nombre pour $uri[5], on le stock dans une variable
    $id_answer = null;

    if (isset($uri[5])) {
        $id_answer = (int) $uri[5];
    }

    // On récupère le type de requête envoyée, i.e. GET, POST, PUT, DELETE
    $request_method = $_SERVER["REQUEST_METHOD"];

    // En instanciant la classe AnswerController, et selon la requête, on executera la requête demandée
    $answer_controller = new AnswerController($bdd, $request_method, $id_answer);
    $answer_controller->execute_query();

?>