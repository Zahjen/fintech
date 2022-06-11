<?php

class CategoryController {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $request_method;
    private $id_category;
    private $category_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db, $request_method, $id_category) {
        $this->db = $db;
        $this->request_method = $request_method;
        $this->id_category = $id_category;
        $this->category_manager = new CategorieManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant d'exécuter une méthode selon le type de requête envoyée
    public function execute_query() {

        switch ($this->request_method) {
            case 'GET':
                if ($this->id_category) {
                    $response = $this->get_by_id($this->id_category);
                } else {
                    $response = $this->get_all();
                };
                break;

            case 'POST':
                $response = $this->insert();
                break;

            case 'PUT':
                $response = $this->update($this->id_category);
                break;

            case 'DELETE':
                $response = $this->delete($this->id_category);
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

    // Méthode permettant de récupérer toutes les catégories 
    private function get_all() {

        $categories = $this->category_manager->getAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';

        header('Content-type: application/json');

        $response['body'] = json_encode($categories);

        return $response;

    }

    // Méthode permettant de récupérer une catégorie selon son id
    private function get_by_id($id) {

        $category = $this->category_manager->getById($id);

        if (!$category) {
            return $this->not_found_query();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($category);

        return $response;

    }

    // Méthode permettant d'insérer une catégorie dans la base de données
    private function insert() {

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_category_valid($input)) {
            return $this->not_executable_query();
        }

        $this->category_manager->add($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de mettre à jour une catégorie selon son id
    private function update($id) {

        $category = $this->category_manager->getById($id);

        if (! $category) {
            return $this->not_found_query();
        }

        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->is_category_valid($input)) {
            return $this->not_executable_query();
        }

        $this->category_manager->update($input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de supprimer une catégorie selon son id
    private function delete($id) {

        $category = $this->category_manager->getById($id);

        if (!$category) {
            return $this->not_found_query();
        }

        $this->category_manager->delete($category);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;

        return $response;

    }

    // Méthode permettant de vérifier qu'une catégorie est correcte avant de pouvoir l'insérer ou la mettre à jour dans la base de données
    private function is_category_valid($input) {

        return isset($input['labelCategorie']);

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