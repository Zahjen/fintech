<?php

class FormAdapter {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $form_manager;
    private $country_manager;
    private $third_party_manager;
    private $buisness_line_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db) {
        $this->db = $db;
        $this->form_manager = new FormulaireManager($db);
        $this->country_manager = new PaysManager($db);
        $this->third_party_manager = new PrestataireManager($db);
        $this->buisness_line_manager = new SecteurActiviteManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant de récupérer les formulaires adaptés d'un client grace à son id
    public function adapt_by_id($id_client) {
        $forms = $this->form_manager->getByIdClient($id_client);

        $forms_adapted = [];

        foreach($forms as $form) {
            $buisness_line = $this->buisness_line_manager->getById($form->getIdSecteur());
            $country = $this->country_manager->getById($form->getIdPays());
            $third_party = $this->third_party_manager->getById($form->getIdPrestataire());

            $array_data_form = array(
                "idForm" => $form->getIdFormulaire(),
                "idClient" => $form->getIdClient(),
                "thirdParty" => $third_party,
                "buisnessLine" => $buisness_line,
                "country" => $country,
                "totalPoints" => $form->getTotalPoints()
            );

            $forms_adapted[] = $array_data_form;
        }

        return $forms_adapted;
    }
    
}

?>