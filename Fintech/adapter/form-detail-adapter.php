<?php

class FormDetailAdapter {

    // --------------------
    // Déclaration des attributs
    // --------------------

    private $db;
    private $form_answer_manager;
    private $question_manager;
    private $answer_manager;
    private $category_manager;
    private $obtained_point_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db) {
        $this->db = $db;
        $this->form_answer_manager = new ReponseFormulaireManager($db);
        $this->question_manager = new QuestionManager($db);
        $this->answer_manager = new ReponseManager($db);
        $this->category_manager = new CategorieManager($db);
        $this->obtained_point_manager = new PointObtenuManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant de récupérer le détail adapté d'un formulaire grace à l'id d'un formulaire
    public function adapt_by_id($id_form) {
        $form_answers = $this->form_answer_manager->getById($id_form);

        $form_answer_adapted = [];

        foreach($form_answers as $form_answer) {
            $question = $this->question_manager->getById($form_answer->getIdQuestion());
            $chosen_answer = $this->answer_manager->getById($form_answer->getIdReponsePresta());
            $category = $this->category_manager->getById($question->getIdCategorie());
            $obtained_point = $this->obtained_point_manager->getByIdQuestionIdReponse($form_answer->getIdQuestion(), $form_answer->getIdReponsePresta());

            $array_data_form = array(
                "idForm" => $form_answer->getIdFormulaire(),
                "question" => $question,
                "chosenAnswer" => $chosen_answer,
                "category" => $category,
                "obtainedPoint" => $obtained_point
            );

            $form_answer_adapted[] = $array_data_form;
        }

        return $form_answer_adapted;
    }

    // Méthode permettant de récupérer tous les détails adapté de tous les formulaire pour tout les clients
    public function adapt() {
        $form_answers = $this->form_answer_manager->getAll();

        $form_answer_adapted = [];

        foreach($form_answers as $form_answer) {
            $question = $this->question_manager->getById($form_answer->getIdQuestion());
            $chosen_answer = $this->answer_manager->getById($form_answer->getIdReponsePresta());
            $category = $this->category_manager->getById($question->getIdCategorie());
            $obtained_point = $this->obtained_point_manager->getByIdQuestionIdReponse($form_answer->getIdQuestion(), $form_answer->getIdReponsePresta());

            $array_data_form = array(
                "idForm" => $form_answer->getIdFormulaire(),
                "question" => $question,
                "chosenAnswer" => $chosen_answer,
                "category" => $category,
                "obtainedPoint" => $obtained_point
            );

            $form_answer_adapted[] = $array_data_form;
        }

        return $form_answer_adapted;
    }
    
}

?>