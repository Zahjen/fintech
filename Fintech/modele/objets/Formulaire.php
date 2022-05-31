<?php

    class Formulaire implements jsonSerializable {

        // -------------------------------------------------
        //attributs
        private $idFormulaire; 
        private $idClient; // clef étrangère
        private $idPrestataire; // clef étrangère
        private $idSecteur; // clef étrangère
        private $idPays;
        private $totalPoints;

        // -------------------------------------------------
        //getters
        public function getIdFormulaire() {
            return $this->idFormulaire;
        }
        public function getIdClient() {
            return $this->idClient;
        }
        public function getIdPrestataire() {
            return $this->idPrestataire;
        }
        public function getIdSecteur() {
            return $this->idSecteur;
        }
        public function getIdPays() {
            return $this->idPays;
        }
        public function getTotalPoints() {
            return $this->totalPoints;
        }

        // -------------------------------------------------
        //setters
        public function setIdFormulaire($idFormulaire) {
            $this->idFormulaire = (int)$idFormulaire; 
        }
        public function setIdClient($idClient) {
            $this->idClient = (int)$idClient; 
        }
        public function setIdPrestataire($idPrestataire) {
            $this->idPrestataire = (int)$idPrestataire; 
        }
        public function setIdSecteur($idSecteur) {
            $this->idSecteur = (int)$idSecteur;
        }
        public function setIdPays($idPays) {
            $this->idPays = (int)$idPays;
        }
        public function setTotalPoints($totalPoints) {
            $this->totalPoints = (int)$totalPoints;
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
                'idClient' => $this->getIdClient(),
                'idPrestataire' => $this->getIdPrestataire(),
                'idSecteur' => $this->getIdSecteur(),
                'idPays' => $this->getIdPays(),
                'totalPoints' => $this->getTotalPoints()
            ];
            return $json;
        }
    }
?> 