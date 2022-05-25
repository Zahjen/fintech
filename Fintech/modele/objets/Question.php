<?php

    class Question implements jsonSerializable {

        // -------------------------------------------------
        // attributs
        private $idQuestion; 
        private $labelQuestion;
        private $type;
        private $idCategorie;

        // -------------------------------------------------
        // getters
        public function getIdQuestion(){
            return $this->idQuestion; 
        }
        public function getLabelQuestion(){
            return $this->labelQuestion;
        }
        public function getType(){
            return $this->type;
        }
        public function getIdCategorie() {
            return $this->idCategorie;
        }
        
        // -------------------------------------------------
        // setters 
        public function setIdQuestion($idQuestion){
            $this->idQuestion = (int)$idQuestion; 
        }
        public function setLabelQuestion($labelQuestion){
            $this->labelQuestion = $labelQuestion;
        }
        public function setType($type){
            $this->type = $type;
        }
        public function setIdCategorie($idCategorie) {
            $this->idCategorie = $idCategorie;
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
                'labelQuestion' => $this->getLabelQuestion(),
                'type' => $this->getType(),
                'idCategorie' => $this->getIdCategorie()
            ];
            return $json;
        }
    }
?>