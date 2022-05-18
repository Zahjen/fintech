<?php
    class ReponseFormulaire implements jsonSerializable {

        // -------------------------------------------------
        // attributs
        private $idFormulaire; // clef étrangère -> id dans formulaire
        private $idQuestion; // clef étrangère -> id dans Question
        private $idReponsePresta; // clef étrangère -> synonyme de idReponse de la classe Reponse

        // -------------------------------------------------
        // getters 
        public function getIdFormulaire() {
            return $this->idFormulaire;
        }
        public function getIdQuestion() {
            return $this->idQuestion;
        }
        public function getIdReponsePresta() {
            return $this->idReponsePresta;
        }

        // -------------------------------------------------
        // setters 
        public function setidFormulaire($idFormulaire) {
            $this->idFormulaire = (int)$idFormulaire;
        }
        public function setIdQuestion($idQuestion) {
            $this->idQuestion = (int)$idQuestion;
        }
        public function setIdReponsePresta($idReponsePresta) {
            $this->idReponsePresta = (int)$idReponsePresta;
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
                'idFormulaire' => $this->getIdFormulaire(),
                'idQuestion' => $this->getIdQuestion(),
                'idReponsePresta' => $this->getIdReponsePresta()
            ];
            return $json;
        }
    }
?> 