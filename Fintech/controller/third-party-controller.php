<?php

class ThirdPartyController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_third_party;
    private $third_party_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_third_party) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_third_party = $id_third_party;
        $this->third_party_manager = new PrestataireManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant d'exécuter une méthode selon le type de requête envoyée
    public function execute_query() {

        switch ($this->request_method) {
            case 'GET':
                if ($this->id_third_party) {
                    $response = $this->get_by_id($this->id_third_party);
                } else {
                    $response = $this->get_all();
                };
                break;

            case 'POST':
                $response = $this->insert();
                break;

            case 'PUT':
                $response = $this->update($this->id_third_party);
                break;

            case 'DELETE':
                $response = $this->delete($this->id_third_party);
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

    // Méthode permettant de récupérer toutes les prestataires 
    private function get_all() {

        $third_partys = $this->third_party_manager->getAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($third_partys);

        return $response;

    }

    // Méthode permettant de récupérer un prestataire selon son id
    private function get_by_id($id) {

        $third_party = $this->third_party_manager->getById($id);

        if (!$third_party) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($third_party);

        return $response;

    }

    // Méthode permettant d'insérer un prestataire dans la base de données
    private function insert() {

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_third_party_valid($input)) {
            return $this->not_executable_query();
        }

        $third_party = new Prestataire();
        $third_party->hydrate($input);

        $this->third_party_manager->add($third_party);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de mettre à jour un prestataire selon son id
    private function update($id) {

        $third_party = $this->third_party_manager->getById($id);

        if (! $third_party) {
            return $this->not_found_query();
        }

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_third_party_valid($input)) {
            return $this->not_executable_query();
        }

        $this->third_party_manager->update($input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de supprimer un prestataire selon son id
    private function delete($id) {

        $third_party = $this->third_party_manager->getById($id);

        if (!$third_party) {
            return $this->not_found_query();
        }

        $this->third_party_manager->delete($third_party);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de vérifier qu'un prestataire est correcte avant de pouvoir l'insérer ou la mettre à jour dans la base de données
    private function is_third_party_valid($input) {

        return isset($input['nomPrestataire']);

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