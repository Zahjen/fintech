<?php

    class Contact implements JsonSerializable {
        
        // -------------------------------------------------
        // attributs
        private $idContact;
        private $nomContact;
        private $tel;
        private $mail;
        private $password;
        private $idClient; // clef étrangère
        private $isAdmin;
        private $isFirstConnection;
    
        // -------------------------------------------------
        // getters
        public function getIdContact(){
            return $this->idContact;
        }
        public function getNomContact(){
            return $this->nomContact;
        }
        public function getTel(){
            return $this->tel;
        }
        public function getMail(){
            return $this->mail;
        }
        public function getPassword(){
            return $this->password;
        }
        public function getIdClient() {
            return $this->idClient;
        }
        public function getIsAdmin() {
            return $this->isAdmin;
        }
        public function getIsFirstConnection() {
            return $this->isFirstConnection;
        }
        
        // -------------------------------------------------
        // setters
        public function setIdContact($idContact){
            $this->idContact = (int)$idContact;
        }
        public function setNomContact($nomContact){
            $this->nomContact = $nomContact;
        }
        public function setTel($tel){
            $this->tel = $tel;
        }
        public function setMail($mail){
            $this->mail = $mail;
        }
        public function setPassword($password){
            $this->password = $password;
        }
        public function setIdClient($idClient){
            $this->idClient = (int)$idClient;
        }
        public function setIsAdmin($isAdmin){
            $this->isAdmin = $isAdmin;
        }
        public function setIsFirstConnection($isFirstConnection){
            $this->isFirstConnection = $isFirstConnection;
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
                'idContact' => $this->getIdContact(),
                'nomContact' => $this->getNomContact(),
                'tel' => $this->getTel(),
                'mail' => $this->getMail(),
                'password' => $this->getPassword(),
                'idClient' => $this->getIdClient(),
                'isAdmin' => $this->getIsAdmin(),
                'isFirstConnection' => $this->getIsFirstConnection()
            ];
            return $json;
        }
    }

?>