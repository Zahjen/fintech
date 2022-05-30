<?php
    class Pays implements jsonSerializable {

        // -------------------------------------------------
        // attributs
        private $idPays;
        private $nomPays;
        private $idReponse; // clef étrangère    
        
        // -------------------------------------------------
        // getters
        public function getIdPays() {
            return $this->idPays;
        }
        public function getNomPays() {
            return $this->nomPays;
        }
        public function getIdReponse() {
            return $this->idReponse;
        }
        
        // -------------------------------------------------
        // setters
        public function setIdPays($idPays) {
            $this->idPays = (int)$idPays;
        }
        public function setNomPays($nomPays) {
            $this->nomPays = $nomPays;
        }
        public function setIdReponse($idReponse) {
            $this->idReponse = (int)$idReponse;
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
                'idPays' => $this->getIdPays(),
                'nomPays' => $this->getNomPays(),
                'idReponse' => $this->getIdReponse()
            ];
            return $json;
        }
    }
?> 