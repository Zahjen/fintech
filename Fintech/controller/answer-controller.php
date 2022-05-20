<?php

class AnswerController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_answer;
    private $answer_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_answer) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_answer = $id_answer;
        $this->answer_manager = new ReponseManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant d'exécuter une méthode selon le type de requête envoyée
    public function execute_query() {

        switch ($this->request_method) {
            case 'GET':
                if ($this->id_answer) {
                    $response = $this->get_by_id($this->id_answer);
                } else {
                    $response = $this->get_all();
                };
                break;

            case 'POST':
                $response = $this->insert();
                break;

            case 'PUT':
                $response = $this->update($this->id_answer);
                break;

            case 'DELETE':
                $response = $this->delete($this->id_answer);
                break;

            default:
                $response = $this->not_found_query();
                break;
        }

        header($response['status_code_header']);

        if ($response['body']) {
            echo $response['body'];
        }

    }

    // Méthode permettant de récupérer toutes les réponses 
    private function get_all() {

        $answers = $this->answer_manager->getAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($answers);

        return $response;

    }

    // Méthode permettant de récupérer une réponse selon son id
    private function get_by_id($id) {

        $answer = $this->answer_manager->getById($id);

        if (!$answer) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($answer);

        return $response;

    }

    // Méthode permettant d'insérer une réponse dans la base de données
    private function insert() {

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_answer_valid($input)) {
            return $this->not_executable_query();
        }

        $this->answer_manager->insert($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de mettre à jour une réponse selon son id
    private function update($id) {

        $answer = $this->answer_manager->getById($id);

        if (! $answer) {
            return $this->not_found_query();
        }

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_answer_valid($input)) {
            return $this->not_executable_query();
        }

        $this->answer_manager->update($input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de supprimer une réponse selon son id
    private function delete($id) {

        $answer = $this->answer_manager->getById($id);

        if (!$answer) {
            return $this->not_found_query();
        }

        $this->answer_manager->delete($answer);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de vérifier qu'une réponse est correcte avant de pouvoir l'insérer ou la mettre à jour dans la base de données
    private function is_answer_valid($input) {

        return isset($input['labelReponse']);

    }

    // Méthode permettant de notifier qu'une requête n'est pas traitable
    private function not_executable_query() {

        $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
        $response['body'] = json_encode([
            'error' => 'Invalid input'
        ]);

        return $response;

    }

    // Méthode permettant de notifier que la requête n'a pa donnée suite
    private function not_found_query() {

        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = null;

        return $response;
    }
}

?>