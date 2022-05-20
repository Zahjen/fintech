<?php

class FormController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_form;
    private $form_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_form) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_form = $id_form;
        $this->form_manager = new FormulaireManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant d'exécuter une méthode selon le type de requête envoyée
    public function execute_query() {

        switch ($this->request_method) {
            case 'GET':
                if ($this->id_form) {
                    $response = $this->get_by_id($this->id_form);
                } else {
                    $response = $this->get_all();
                };
                break;

            case 'POST':
                $response = $this->insert();
                break;

            case 'PUT':
                $response = $this->update($this->id_form);
                break;

            case 'DELETE':
                $response = $this->delete($this->id_form);
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

        $forms = $this->form_manager->getAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($forms);

        return $response;

    }

    // Méthode permettant de récupérer une réponse selon son id
    private function get_by_id($id) {

        $form = $this->form_manager->getById($id);

        if (!$form) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($form);

        return $response;

    }

    // Méthode permettant d'insérer une réponse dans la base de données
    private function insert() {

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_form_valid($input)) {
            return $this->not_executable_query();
        }

        $this->form_manager->insert($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de mettre à jour une réponse selon son id
    private function update($id) {

        $form = $this->form_manager->getById($id);

        if (!$form) {
            return $this->not_found_query();
        }

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_form_valid($input)) {
            return $this->not_executable_query();
        }

        $this->form_manager->update($input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de supprimer une réponse selon son id
    private function delete($id) {

        $form = $this->form_manager->getById($id);

        if (!$form) {
            return $this->not_found_query();
        }

        $this->form_manager->delete($form);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de vérifier qu'une réponse est correcte avant de pouvoir l'insérer ou la mettre à jour dans la base de données
    private function is_form_valid($input) {

        return isset($input['idClient']) && isset($input['idPrestataire']) && isset($input['idSecteur']);

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