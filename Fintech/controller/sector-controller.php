<?php

class SectorController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_sector;
    private $sector_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_sector) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_sector = $id_sector;
        $this->sector_manager = new SecteurActiviteManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant d'exécuter une méthode selon le type de requête envoyée
    public function execute_query() {

        switch ($this->request_method) {
            case 'GET':
                if ($this->id_sector) {
                    $response = $this->get_by_id($this->id_sector);
                } else {
                    $response = $this->get_all();
                };
                break;

            case 'POST':
                $response = $this->insert();
                break;

            case 'PUT':
                $response = $this->update($this->id_sector);
                break;

            case 'DELETE':
                $response = $this->delete($this->id_sector);
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

    // Méthode permettant de récupérer tous les secteurs 
    private function get_all() {

        $sectors = $this->sector_manager->getAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($sectors);

        return $response;

    }

    // Méthode permettant de récupérer un secteur selon son id
    private function get_by_id($id) {

        $sector = $this->sector_manager->getById($id);

        if (!$sector) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($sector);

        return $response;

    }

    // Méthode permettant d'insérer un secteur dans la base de données
    private function insert() {

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_sector_valid($input)) {
            return $this->not_executable_query();
        }

        $this->sector_manager->insert($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de mettre à jour un secteur selon son id
    private function update($id) {

        $sector = $this->sector_manager->getById($id);

        if (! $sector) {
            return $this->not_found_query();
        }

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_sector_valid($input)) {
            return $this->not_executable_query();
        }

        $this->sector_manager->update($input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de supprimer un secteur selon son id
    private function delete($id) {

        $sector = $this->sector_manager->getById($id);

        if (!$sector) {
            return $this->not_found_query();
        }

        $this->sector_manager->delete($sector);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de vérifier qu'un secteur est correcte avant de pouvoir l'insérer ou la mettre à jour dans la base de données
    private function is_sector_valid($input) {

        return isset($input['labelSecteur']);

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