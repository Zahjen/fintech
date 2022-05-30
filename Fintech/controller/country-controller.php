<?php

class CountryController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_country;
    private $country_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_country) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_country = $id_country;
        $this->country_manager = new PaysManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant d'exécuter une méthode selon le type de requête envoyée
    public function execute_query() {

        switch ($this->request_method) {
            case 'GET':
                if ($this->id_country) {
                    $response = $this->get_by_id($this->id_country);
                } else {
                    $response = $this->get_all();
                };
                break;

            case 'POST':
                $response = $this->insert();
                break;

            case 'PUT':
                $response = $this->update($this->id_country);
                break;

            case 'DELETE':
                $response = $this->delete($this->id_country);
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

    // Méthode permettant de récupérer tous les pays 
    private function get_all() {

        $countries = $this->country_manager->getAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($countries);

        return $response;

    }

    // Méthode permettant de récupérer un pays selon son id
    private function get_by_id($id) {

        $country = $this->country_manager->getById($id);

        if (!$country) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($country);

        return $response;

    }

    // Méthode permettant d'insérer un pays dans la base de données
    private function insert() {

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_country_valid($input)) {
            return $this->not_executable_query();
        }

        $this->country_manager->insert($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de mettre à jour un pays selon son id
    private function update($id) {

        $country = $this->country_manager->getById($id);

        if (! $country) {
            return $this->not_found_query();
        }

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_country_valid($input)) {
            return $this->not_executable_query();
        }

        $this->country_manager->update($input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de supprimer un pays selon son id
    private function delete($id) {

        $country = $this->country_manager->getById($id);

        if (!$country) {
            return $this->not_found_query();
        }

        $this->country_manager->delete($country);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de vérifier qu'un pays est correcte avant de pouvoir l'insérer ou la mettre à jour dans la base de données
    private function is_country_valid($input) {

        return isset($input['nomPays']) && isset($input['idReponse']);

    }

    // Méthode permettant de notifier qu'un requête n'est pas traitable
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