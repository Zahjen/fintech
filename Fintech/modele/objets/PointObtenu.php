<?php
    class PointObtenu implements jsonSerializable {

        // -------------------------------------------------
        // attributs
        private $idQuestion; // clef étrangère , idQuestion récupéré depuis table/classe Question
        private $idReponse; // clef étrangère, idReponse récupéré depuis la table/classe Reponse
        private $pointQuestion;

        // -------------------------------------------------
        // getter 
        public function getIdQuestion() {
            return $this->idQuestion;
        }
        public function getIdReponse() {
            return $this->idReponse;
        }
        public function getPointQuestion() {
            return $this->pointQuestion;
        }

        // -------------------------------------------------
        // setter
        public function setIdQuestion($idQuestion) {
            $this->idQuestion = (int)$idQuestion;
        }
        public function setIdReponse($idReponse) {
            $this->idReponse = (int)$idReponse;
        }
        public function setPointQuestion($pointQuestion) {
            $this->pointQuestion = $pointQuestion;
        }

        // -------------------------------------------------
        // hydrate
        public function hydrate($donnees){
            foreach($donnees as $key => $value){
                $method = 'set'.ucfirst($key);
                if(method_exists($this, $method)){
                    $this->$method($value);
                }
            }
        }

        // -------------------------------------------------
        // json
        public function jsonSerialize() {
            $json = [
                'idQuestion' => $this->getIdQuestion(),
                'idReponse' => $this->getIdReponse(),
                'pointQuestion' => $this->getPointQuestion()
            ];
            return $json;
        }
    }
?> 