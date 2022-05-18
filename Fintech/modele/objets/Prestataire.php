<?php 

    class Prestataire implements jsonSerializable {

        // -------------------------------------------------
        // attributs 
        private $idPrestataire;
        private $nomPrestataire;

        // -------------------------------------------------
        // getters
        public function getIdPrestataire(){
            return $this->idPrestataire;
        }
        public function getNomPrestataire(){
            return $this->nomPrestataire;
        }
        
        // -------------------------------------------------
        // setters
        public function setIdPrestataire($idPrestataire){
            $this->idPrestataire = (int)$idPrestataire;
        }
        public function setNomPrestataire($nomPrestataire){
            $this->nomPrestataire = $nomPrestataire;
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
                'idPrestataire' => $this->getIdPrestataire(),
                'nomPrestataire' => $this->getNomPrestataire(),

            ];
            return $json;
        }
    }
?>