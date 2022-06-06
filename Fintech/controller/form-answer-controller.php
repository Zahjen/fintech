<?php

class FormAnswerController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_form;
    private $id_question;
    private $form_answer_manager;
    private $third_party_manager;
    private $form_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_form, $id_question) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_form = $id_form;
        $this->id_question = $id_question;
        $this->form_answer_manager = new ReponseFormulaireManager($db);
        $this->third_party_manager = new PrestataireManager($db);
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

                    if ($this->id_question) {
                        $response = $this->get_by_id_form_question($this->id_form, $this->id_question);
                    } else {
                        $response = $this->get_by_id($this->id_form);
                    }

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

    // Méthode permettant de récupérer toutes les formulaires 
    private function get_all() {

        $forms = $this->form_answer_manager->getAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($forms);

        return $response;

    }

    // Méthode permettant de récupérer un formulaire selon son id
    private function get_by_id($id) {

        $form = $this->form_answer_manager->getById($id);

        if (!$form) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($form);

        return $response;

    }

    // Méthode permettant de récupérer les points obtenu a une reponse associée à une certaine question
    private function get_by_id_form_question($id_form, $id_question) {

        $form_answer = $this->form_answer_manager->getByTwoId($id_form, $id_question);

        if (!$form_answer) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($form_answer);

        return $response;

    }

    // Méthode permettant d'insérer un formulaire dans la base de données
    private function insert() {

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        /*if (!$this->is_form_answer_valid($input)) {
            return $this->not_executable_query();
        }*/

        echo json_encode($input);

        if ($input['thirdParty']['idPrestataire'] === -1) {
            $third_party = new Prestataire();
            $third_party->hydrate($input['thirdParty']);
            $this->third_party_manager->add($third_party);      
            $last_id = $this->db->lastInsertId();
            $input['form']['idPrestataire'] = (int) $last_id;
        } else {
            $input['form']['idPrestataire'] = (int) $input['thirdParty']['idPrestataire'];
        }

        $form = new Formulaire();
        $form->hydrate($input['form']);

        $this->form_manager->add($form);
        $last_form_id = $this->db->lastInsertId();

        echo json_encode($form);

        foreach($input['formAnswer'] as $form_answer) {
            $form_answer['idFormulaire'] = (int) $last_form_id;
            $form_answer_obj = new ReponseFormulaire();
            $form_answer_obj->hydrate($form_answer);
            $this->form_answer_manager->add($form_answer_obj);
        }
    
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;

        return $response;
    }

    // Méthode permettant de mettre à jour un formulaire selon son id
    private function update($id) {

        $form = $this->form_answer_manager->getById($id);

        if (!$form) {
            return $this->not_found_query();
        }

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_form_answer_valid($input)) {
            return $this->not_executable_query();
        }

        $this->form_answer_manager->update($input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de supprimer un formulaire selon son id
    private function delete($id) {

        $form = $this->form_answer_manager->getById($id);

        if (!$form) {
            return $this->not_found_query();
        }

        $this->form_answer_manager->delete($form);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de vérifier qu'un formulaire est correcte avant de pouvoir l'insérer ou la mettre à jour dans la base de données
    private function is_form_answer_valid($input) {

        return isset($input['idFormulaire']) && isset($input['idQuestion']) && isset($input['idReponsePresta']);

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