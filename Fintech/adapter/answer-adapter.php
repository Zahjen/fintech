<?php

class AnswerAdapter {

    // --------------------
    // Déclaration des attributs
    // --------------------

    // Je n'ai pas trouvé pour le moment comment gérer les réponses des dropdowns car elles ne sont pas dans la table réponse et rien ne permet de lier le label avec la réponse directement
    private $id_question_buisness_line = 1;
    private $id_question_country = 4;

    private $db;
    private $country_manager;
    private $buisness_line_manager;
    private $obtained_point_manager;
    private $question_manager;
    private $answer_manager;

    // --------------------
    // Constructeur
    // --------------------

    public function __construct($db) {
        $this->db = $db;
        $this->country_manager = new PaysManager($db);
        $this->buisness_line_manager = new SecteurActiviteManager($db);
        $this->obtained_point_manager = new PointObtenuManager($db);
        $this->question_manager = new QuestionManager($db);
        $this->answer_manager = new ReponseManager($db);
    }

    // --------------------
    // Méthode
    // --------------------

    // Méthode permettant d'adapter les réponses concernant le secteur d'activité
    private function adapt_buisness_line() {
        $buisness_lines = $this->buisness_line_manager->getAll();
        $buisness_line_adapted = [];

        foreach($buisness_lines as $buisness_line) {
            $obtained_point = $this->obtained_point_manager->getById($this->id_question_buisness_line);

            $array_data_buisness_line = array(
                "idQuestion" => $obtained_point[0]->getIdQuestion(),
                "idAnswer" => $obtained_point[0]->getIdReponse(),
                "labelAnswer" => $buisness_line->getLabelSecteur(),
                "idDropdown" => $buisness_line->getIdSecteur(),
                "obtainedPoint" => 0,
            );

            $buisness_line_adapted[] = $array_data_buisness_line;
        }

        return $buisness_line_adapted;
    }

    // Méthode permettant d'adapter les réponses concernant les pays 
    private function adapt_country() {
        $countries = $this->country_manager->getAll();
        $country_adapted = [];

        foreach($countries as $country) {
            $obtained_point = $this->obtained_point_manager->getByIdQuestionIdReponse($this->id_question_country, $country->getIdReponse());

            $array_data_country = array(
                "idQuestion" => $obtained_point->getIdQuestion(),
                "idAnswer" => $country->getIdReponse(),
                "labelAnswer" => $country->getNomPays(),
                "idDropdown" => $country->getIdPays(),
                "obtainedPoint" => $obtained_point->getPointQuestion(),
            );

            $country_adapted[] = $array_data_country;
        }

        return $country_adapted;
    }

    // Méthode permettant d'adapter les réponses à choix unique à cocher
    private function adapt_radio() {
        $answer_radio_adapted = [];

        $questions = $this->question_manager->getAll();

        foreach($questions as $question) {
            if ($question->getType() === 'radio') {
                $obtained_points = $this->obtained_point_manager->getById($question->getIdQuestion());

                foreach($obtained_points as $obtained_point) {
                    $id_answer = $obtained_point->getIdReponse();
                    $answer = $this->answer_manager->getById($id_answer);

                    $array_data = array(
                        "idQuestion" => $obtained_point->getIdQuestion(),
                        "idAnswer" => $obtained_point->getIdReponse(),
                        "obtainedPoint" => $obtained_point->getPointQuestion(),
                        "labelAnswer" => $answer->getLabelReponse()
                    );

                    $answer_radio_adapted[] = $array_data;
                }
            }
        }

        return $answer_radio_adapted;
    }

    // Méthode permettant de retourner la totalité des réponses, que ce soit du dropdown ou du radio
    public function adapt() {
        $country = $this->adapt_country();
        $buisness_line = $this->adapt_buisness_line();
        $answer_radio = $this->adapt_radio();

        return array_merge(
            $buisness_line,
            $answer_radio,
            $country,
        );
    }
}

?>