<?php
    class Client implements jsonSerializable {
        // -------------------------------------------------
        // attributs
        private $idClient;
        private $nomClient;
        private $adresse; 
        private $codePostal; 
        private $ville;
        private $idPays;

        // -------------------------------------------------
        // getters
        public function getIdClient() {
            return $this->idClient;
        }
        public function getNomClient() {
            return $this->nomClient;
        }
        public function getAdresse() {
            return $this->adresse;
        }
        public function getCodePostal() {
            return $this->codePostal;
        }
        public function getVille() {
            return $this->ville;
        }
        public function getIdPays() {
            return $this->idPays;
        }

        // -------------------------------------------------
        // setters
        public function setIdClient($idClient) {
            $this->idClient = (int)$idClient;
        }
        public function setNomClient($nomClient) {
            $this->nomClient = $nomClient;
        }
        public function setAdresse($adresse) {
            $this->adresse = $adresse;
        }
        public function setCodePostal($codePostal) {
            $this->codePostal = $codePostal;
        }
        public function setVille($ville) {
            $this->ville = $ville;
        }
        public function setIdPays($idPays) {
            $this->idPays = (int)$idPays;
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
                'idClient' => $this->getIdClient(),
                'nomClient' => $this->getNomClient(),
                'adresse' => $this->getAdresse(),
                'codePostal' => $this->getCodePostal(),
                'ville' => $this->getVille(),
                'idPays' => $this->getIdPays()
            ];
            return $json;
        }
    }
?> 