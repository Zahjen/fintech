<?php

class ObtainedPointController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_question;
    private $id_answer;
    private $obtained_point_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_question, $id_answer) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_question = $id_question;
        $this->id_answer = $id_answer;
        $this->obtained_point_manager = new PointObtenuManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant d'exécuter une méthode selon le type de requête envoyée
    public function execute_query() {

        switch ($this->request_method) {
            case 'GET':
                if ($this->id_question) {

                    if ($this->id_answer) {
                        $response = $this->get_by_id_question_answer($this->id_question, $this->id_answer);
                    } else {
                        $response = $this->get_by_id($this->id_question);
                    }
                    
                } else {
                    $response = $this->get_all();
                };
                break;

            case 'POST':
                $response = $this->insert();
                break;

            case 'PUT':
                $response = $this->update($this->id_question);
                break;

            case 'DELETE':
                $response = $this->delete($this->id_question);
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

    // Méthode permettant de récupérer tous les points obtenus 
    private function get_all() {

        $obtained_points = $this->obtained_point_manager->getAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($obtained_points);

        return $response;

    }

    // Méthode permettant de récupérer les points obtenus selon l'id de la question
    private function get_by_id($id) {

        $obtained_point = $this->obtained_point_manager->getById($id);

        

        if (!$obtained_point) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($obtained_point);

        return $response;

    }

    // Méthode permettant de récupérer les points obtenu a une reponse associée à une certaine question
    private function get_by_id_question_answer($id_question, $id_answer) {

        $obtained_point = $this->obtained_point_manager->getByIdQuestionIdReponse($id_question, $id_answer);

        if (!$obtained_point) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($obtained_point);

        return $response;

    }

    // Méthode permettant d'insérer un point obtenu dans la base de données
    private function insert() {

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_obtained_point_valid($input)) {
            return $this->not_executable_query();
        }

        $this->obtained_point_manager->insert($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de mettre à jour un point obtenu l'id d'une question
    // A voir pour ajouter égalment l'id de réponse pour update le point complet 
    private function update($id) {

        $obtained_point = $this->obtained_point_manager->getById($id);

        if (!$obtained_point) {
            return $this->not_found_query();
        }

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_obtained_point_valid($input)) {
            return $this->not_executable_query();
        }

        $this->obtained_point_manager->update($input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de supprimer une point obtenu selon son id
    private function delete($id) {

        $obtained_point = $this->obtained_point_manager->getById($id);

        if (!$obtained_point) {
            return $this->not_found_query();
        }

        $this->obtained_point_manager->delete($obtained_point);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de vérifier qu'une point obtenu est correcte avant de pouvoir l'insérer ou la mettre à jour dans la base de données
    private function is_obtained_point_valid($input) {

        return isset($input['idQuestion']) && isset($input['idReponse']) && isset($input['pointQuestion']);

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