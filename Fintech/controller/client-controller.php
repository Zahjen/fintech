<?php

class ClientController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_client;
    private $client_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_client) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_client = $id_client;
        $this->client_manager = new ClientManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant d'exécuter une méthode selon le type de requête envoyée
    public function execute_query() {

        switch ($this->request_method) {
            case 'GET':
                if ($this->id_client) {
                    $response = $this->get_by_id($this->id_client);
                } else {
                    $response = $this->get_all();
                };
                break;

            case 'POST':
                $response = $this->insert();
                break;

            case 'PUT':
                $response = $this->update($this->id_client);
                break;

            case 'DELETE':
                $response = $this->delete($this->id_client);
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

    // Méthode permettant de récupérer tous les clients 
    private function get_all() {

        $clients = $this->client_manager->getAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($clients);

        return $response;

    }

    // Méthode permettant de récupérer un client selon son id
    private function get_by_id($id) {

        $client = $this->client_manager->getById($id);

        if (!$client) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($client);

        return $response;

    }

    // Méthode permettant d'insérer un client dans la base de données
    private function insert() {

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_client_valid($input)) {
            return $this->not_executable_query();
        }

        $this->client_manager->add($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de mettre à jour un client selon son id
    private function update($id) {

        $client = $this->client_manager->getById($id);

        if (! $client) {
            return $this->not_found_query();
        }

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_client_valid($input)) {
            return $this->not_executable_query();
        }

        $this->client_manager->update($input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de supprimer un client selon son id
    private function delete($id) {

        $client = $this->client_manager->getById($id);

        if (!$client) {
            return $this->not_found_query();
        }

        $this->client_manager->delete($client);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de vérifier qu'un client est correcte avant de pouvoir l'insérer ou la mettre à jour dans la base de données
    private function is_client_valid($input) {

        return isset($input['nomClient']) && isset($input['adresse']) && isset($input['codePostal']) && isset($input['ville']) && isset($input['idPays']);

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