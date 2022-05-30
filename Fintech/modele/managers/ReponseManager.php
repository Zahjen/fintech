<?php
    class ReponseManager {

        // attributs
        private $bdd;

        // à l'initialisation de mon manager je lui donne la connexion à la BdD  
        public function __construct(PDO $bdd) {
            $this->setBdd($bdd);
        }

        //setters
        public function setBdd(PDO $bdd) {
            $this->bdd = $bdd;
        }

        // Méthodes
        public function getById($idReponse) {
            $laReponse= null;
            try{
                $idReponse = (int)$idReponse;
                $req = $this->bdd->prepare('SELECT idReponse, labelReponse FROM reponse WHERE idReponse = ?');
                $req->execute(array($idReponse));
                $donnees = $req->fetch(PDO::FETCH_ASSOC);
                $laReponse = new Reponse();
                $laReponse->hydrate($donnees);
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $laReponse;
        }



        public function getAll() {
            $listeReponses = [];
            try{
                $req = $this->bdd->prepare( 'SELECT idReponse,labelReponse FROM reponse' );
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $reponse = new Reponse();
                    $reponse->hydrate($donnees);
                    $listeReponses[] = $reponse;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listeReponses;
        }


        public function add(Reponse $reponse){
            try {
                $req = $this->bdd->prepare(' INSERT INTO reponse(labelReponse) VALUES(:labelReponse) ');
                $req->bindValue(':labelReponse', $reponse->getLabelReponse());
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        public function update(Reponse $reponse){
            try{
                $req = $this->bdd->prepare('UPDATE reponse SET labelReponse = :labelReponse WHERE idReponse = :idReponse');
                $req->bindValue(':idReponse', $reponse->getIdReponse(), PDO::PARAM_INT);
                $req->bindValue(':labelReponse', $reponse->getLabelReponse());
                $req->execute();
            } catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }

        public function delete(Reponse $reponse) {
            try{
                $req = $this->bdd->prepare( 'DELETE FROM reponse WHERE idReponse = :idReponse' );
                $req->bindValue(':idReponse', $reponse->getIdReponse(), PDO::PARAM_INT);
                $req->execute();
            } catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }
    }

?> 