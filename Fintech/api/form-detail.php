<?php

    require '../modele/bdd/Connexion.php';

    require '../adapter/form-detail-adapter.php';
    require '../controller/form-detail-controller.php';

    require '../modele/managers/PointObtenuManager.php';
    require '../modele/objets/PointObtenu.php';

    require '../modele/managers/ReponseManager.php';
    require '../modele/objets/Reponse.php';

    require '../modele/managers/QuestionManager.php';
    require '../modele/objets/Question.php';

    require '../modele/managers/ReponseFormulaireManager.php';
    require '../modele/objets/ReponseFormulaire.php';

    require '../modele/managers/CategorieManager.php';
    require '../modele/objets/Categorie.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // On parse l'url pour recupèrer chacun des membres de l'url. 
    // Par exemple ici l'url qui nous permettra de procéder aux requêtes sur le détail du formulaire sera donné par : 
    // http://http://127.0.0.1/dashboard/Fintech/api/form-detail.php
    // Il vient que url[4] = form-detail.php
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode('/', $uri);

    // Si on suit le raisonnement nous permettant de récupérer les élèments de l'url, si on a un nombre pour $uri[5], on le stock dans une variable
    $id_form = null;

    if (isset($uri[5])) {
        $id_form = (int) $uri[5];
    }

    // On récupère le type de requête envoyée, i.e. GET, POST, PUT, DELETE
    $request_method = $_SERVER["REQUEST_METHOD"];

    // En instanciant la classe FormDetailController, et selon la requête, on executera la requête demandée
    $form_controller = new FormDetailController($bdd, $request_method, $id_form);
    $form_controller->execute_query();

?>