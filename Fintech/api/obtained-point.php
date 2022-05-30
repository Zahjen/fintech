<?php

    require '../modele/bdd/Connexion.php';

    require '../controller/obtained-point-controller.php';
    require '../modele/managers/PointObtenuManager.php';
    require '../modele/objets/PointObtenu.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // On parse l'url pour recupèrer chacun des membres de l'url. 
    // Par exemple ici l'url qui nous permettra de procéder aux requêtes sur les réponses sera donné par : 
    // http://http://127.0.0.1/dashboard/Fintech/api/obtained-point.php
    // Il vient que url[4] = obtained-point.php
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode('/', $uri);

    // Si on suit le raisonnement nous permettant de récupérer les élèments de l'url, si on a un nombre pour $uri[5], on le stock dans une variable
    $id_question = null;

    if (isset($uri[5])) {
        $id_question = (int) $uri[5];
    }

    // Si on suit le raisonnement nous permettant de récupérer les élèments de l'url, si on a un nombre pour $uri[6], on le stock dans une variable.
    // Notons donc que si l'on a un url du type : http://127.0.0.1/dashboard/Fintech/api/obtained-point.php/2/6, cela signifie qu'on l'on souahitera afficher le json correspondant à la question 2 et ayant la réponse 6
    $id_answer = null;

    if (isset($uri[6])) {
        $id_answer = (int) $uri[6];
    }

    // On récupère le type de requête envoyée, i.e. GET, POST, PUT, DELETE
    $request_method = $_SERVER["REQUEST_METHOD"];

    // En instanciant la classe ObtainedPointController, et selon la requête, on executera la requête demandée
    $obtained_point_controller = new ObtainedPointController($bdd, $request_method, $id_question, $id_answer);
    $obtained_point_controller->execute_query();

?>