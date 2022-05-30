<?php
    class Reponse implements jsonSerializable {

        // -------------------------------------------------
        // attributs
        private $idReponse; 
        private $labelReponse;

        // -------------------------------------------------
        // getters
        public function getIdReponse() {
            return $this->idReponse; 
        }
        public function getLabelReponse() {
            return $this->labelReponse;
        }

        // -------------------------------------------------
        // setters 
        public function setIdReponse($idReponse) {
            $this->idReponse = $idReponse; 
        }
        public function setLabelReponse($labelReponse) {
            $this->labelReponse = $labelReponse;
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
                'idReponse' => $this->getIdReponse(),
                'labelReponse' => $this->getLabelReponse()
            ];
            return $json;
        }
    }
?> 