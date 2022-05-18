<?php

    class ContactManager {

        // attributs
        private $bdd;

        // à l'initialisation de mon manager je lui donne la connexion à la BdD  
        public function __construct(PDO $bdd) {
            $this->setBdd($bdd);
        }

        //setter
        public function setBdd(PDO $bdd) {
            $this->bdd = $bdd;
        }

        // Méthodes
        public function getById($id) {
            $monContact = null;
            try {
                $id = (int)$id;
                $req = $this->bdd->prepare('SELECT idContact,nomContact,tel,mail,password,idClient,isAdmin FROM contact WHERE idContact = ?');
                $req->execute(array($id));
                $donnees = $req->fetch(PDO::FETCH_ASSOC);
                $monContact = new Contact();
                $monContact->hydrate($donnees);
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $monContact;
        }

        public function getAll() {
            $listeContacts = [];
            try {
                $req = $this->bdd->prepare( 'SELECT idContact,nomContact,tel,mail,password,idClient,isAdmin FROM contact');
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $contact = new Contact();
                    $contact->hydrate($donnees);
                    $listeContacts[] = $contact;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listeContacts;
        }

        public function add(Contact $contact){
            if ($this->isAlreadyExist($contact) === false){
                try {
                    $req = $this->bdd->prepare(' INSERT INTO contact(nomContact,tel,mail,password,idClient,isAdmin) VALUES(:nomContact,:tel,:mail,:password,:idClient,:isAdmin) ');
                    $req->bindValue(':nomContact', $contact->getNomContact(), PDO::PARAM_STR);
                    $req->bindValue(':tel', $contact->getTel(), PDO::PARAM_STR);
                    $req->bindValue(':mail', $contact->getMail(), PDO::PARAM_STR);
                    $req->bindValue(':password', $contact->getPassword(), PDO::PARAM_STR);
                    $req->bindValue(':idClient', $contact->getIdClient(), PDO::PARAM_INT);
                    $req->bindValue(':isAdmin', $contact->getIsAdmin());
                    $req->execute();
                    return true;
                } catch (Exception $erreur) {
                    die('Erreur : '.$erreur->getMessage());
                }
            } else {
                echo 'Le numéro de téléphone ou l\'adresse mail du contact que vous tentez d\'enregistrer est le même que celui d\'un contact déjà dans la base de donnée ! <br>';
                return false;
            }
        }

        public function delete(Contact $contact) {
            try {
                $req = $this->bdd->prepare( 'DELETE FROM contact WHERE idContact = :id');
                $req->bindValue(':id', $contact->getIdContact(), PDO::PARAM_INT);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        public function update(Contact $contact) {
            try {
                $req = $this->bdd->prepare( 'UPDATE contact SET nomContact = :nomContact, tel = :tel, mail = :mail, password= :password, idClient = :idClient, isAdmin = :isAdmin WHERE idContact = :id');
                $req->bindValue(':id', $contact->getIdContact(), PDO::PARAM_INT);
                $req->bindValue(':nomContact', $contact->getNomContact(), PDO::PARAM_STR);
                $req->bindValue(':tel', $contact->getTel(), PDO::PARAM_STR);
                $req->bindValue(':mail', $contact->getMail(), PDO::PARAM_STR);
                $req->bindValue(':password', $contact->getPassword(), PDO::PARAM_STR);
                $req->bindValue(':idClient', $contact->getIdClient());
                $req->bindValue(':isAdmin', $contact->getIsAdmin());
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        // méthode nécéssaire pour savoir si le contact existe déjà ?
        // sur le numéro de téléphone ou l'adresse mail, car ce sont des données uniques
        // si ça te semble inutile, tu peux l'enlever
        public function isAlreadyExist(Contact $contact){
            $alreadyexist = false;
            $listeContacts = $this->getAll();
            foreach ($listeContacts as $cont){
                if ($cont->getTel() === $contact->getTel() || $cont->getMail() === $contact->getMail()){
                    $alreadyexist = true;
                }
            }
            return $alreadyexist;
        }
    }

?> 