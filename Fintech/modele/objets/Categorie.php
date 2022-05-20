<?php
    class Categorie implements jsonSerializable {

        private $idCategorie;
        private $labelCategorie;

        // -------------------------------------------------
        // getters
        public function getIdCategorie() {
            return $this->idCategorie;
        }
        public function getLabelCategorie() {
            return $this->labelCategorie;
        }


        // -------------------------------------------------
        // setters
        public function setIdCategorie($idCategorie) {
            $this->idCategorie = (int)$idCategorie;
        }

        public function setLabelCategorie($labelCategorie) {
            $this->labelCategorie = $labelCategorie;
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
                'idCategorie' => $this->getIdCategorie(),
                'labelCategorie' => $this->getLabelCategorie()
            ];
            return $json;
        }
    
    }


?> 