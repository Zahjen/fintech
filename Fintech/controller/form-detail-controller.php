<?php

class FormDetailController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_form;
    private $form_detail_adapter;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_form) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_form = $id_form;
        $this->form_detail_adapter = new FormDetailAdapter($db);
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

            default:
                $response = $this->not_found_query();
                break;
        }

        header($response['status_code_header']);

        if ($response['body']) {
            echo $response['body'];
        }

    }

    // Méthode permettant de récupérer tous les détails de tous les formulaires
    private function get_all() {

        $form_details = $this->form_detail_adapter->adapt();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($form_details);

        return $response;

    }

    // Méthode permettant de récupérer le détail d'un formulaire selon son id
    private function get_by_id($id) {

        $form_detail = $this->form_detail_adapter->adapt_by_id($id);

        if (!$form_detail) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($form_detail);

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