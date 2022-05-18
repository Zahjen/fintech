<?php

    class ClientManager {

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
        public function getById(int $id) {
            $monClient = null;
            try {
                $req = $this->bdd->prepare('SELECT idClient, nomClient,adresse,codePostal,ville,idPays FROM client WHERE idClient = ?');
                $req->execute(array($id));
                $donnees = $req->fetch(PDO::FETCH_ASSOC);
                $monClient = new Client();
                $monClient->hydrate($donnees);
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $monClient;
        }

        public function getAll() {
            $listeClients = [];
            try {
                $req = $this->bdd->prepare( 'SELECT idClient,nomClient,adresse,codePostal,ville,idPays FROM client');
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $client = new Client();
                    $client->hydrate($donnees);
                    $listeClients[] = $client;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listeClients;
        }

        public function add(Client $client){
            if ($this->isAlreadyExist($client) === false){
                try {
                    $req = $this->bdd->prepare(' INSERT INTO client(nomClient, adresse, codePostal, ville, idPays) VALUES(:nomClient, :adresse, :codePostal,:ville, :idPays) ');
                    $req->bindValue(':nomClient', $client->getNomClient(), PDO::PARAM_STR);
                    $req->bindValue(':adresse', $client->getAdresse(), PDO::PARAM_STR);
                    $req->bindValue(':codePostal', $client->getCodePostal(), PDO::PARAM_STR);
                    $req->bindValue(':ville', $client->getVille(), PDO::PARAM_STR);
                    $req->bindValue(':idPays', $client->getIdPays(), PDO::PARAM_INT);
                    $req->execute();
                    return true;
                } catch (Exception $erreur) {
                    die('Erreur : '.$erreur->getMessage());
                }
            } else {
                echo 'Le nom du client que vous tentez d\'enregistrer est identique à celui d\'un client déjà dans la base de donnée ! <br>';
                return false;
            }
        }

        public function delete(Client $client) {
            try {
                $req = $this->bdd->prepare( 'DELETE FROM client WHERE idClient = :id');
                $req->bindValue(':id', $client->getIdClient(), PDO::PARAM_INT);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        public function update(Client $client) {
            try {
                $req = $this->bdd->prepare( 'UPDATE client SET nomClient = :nomClient, adresse = :adresse, codePostal = :codePostal, ville = :ville, idPays = :idPays WHERE idClient = :id');
                $req->bindValue(':id', $client->getIdClient(), PDO::PARAM_INT);
                $req->bindValue(':nomClient', $client->getNomClient(), PDO::PARAM_STR);
                $req->bindValue(':adresse', $client->getAdresse(), PDO::PARAM_STR);
                $req->bindValue(':codePostal', $client->getCodePostal(), PDO::PARAM_STR);
                $req->bindValue(':ville', $client->getVille(), PDO::PARAM_STR);
                $req->bindValue(':idPays', $client->getIdPays(), PDO::PARAM_INT);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        public function isAlreadyExist(Client $Client){
            $alreadyexist = false;
            $listeClients = $this->getAll();
            foreach ($listeClients as $CLIENT){
                if ($CLIENT->getNomClient() === $Client->getNomClient()){
                    $alreadyexist = true;
                }
            }
            return $alreadyexist;
        }
    }

?> 