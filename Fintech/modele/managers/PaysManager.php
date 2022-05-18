<?php
    class PaysManager {

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
            $monPays = null;
            try {
                $req = $this->bdd->prepare('SELECT idPays,nomPays,idReponse FROM pays WHERE idPays = ?');
                $req->execute(array($id));
                $donnees = $req->fetch(PDO::FETCH_ASSOC);
                $monPays = new Pays();
                $monPays->hydrate($donnees);
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $monPays;
        }

        public function getAll() {
            $listePays = [];
            try {
                $req = $this->bdd->prepare( 'SELECT idPays,nomPays,idReponse FROM pays' );
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $pays = new Pays();
                    $pays->hydrate($donnees);
                    $listePays[] = $pays;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listePays;
        }

        public function add(Pays $pays){
            if ($this->isAlreadyExist($pays) === false){
                try {
                    $req = $this->bdd->prepare(' INSERT INTO pays(nomPays,idReponse) VALUES(:nomPays,:idReponse) ');
                    $req->bindValue(':nomPays', $pays->getNompays(), PDO::PARAM_STR);
                    $req->bindValue(':idReponse', $pays->getIdReponse(), PDO::PARAM_INT);
                    $req->execute();
                    return true;
                } catch (Exception $erreur) {
                    die('Erreur : '.$erreur->getMessage());
                }
            } else {
                echo 'Le nom du pays que vous tentez d\'enregistrer existe déjà dans la base de données ! <br>';
                return false;
            }
        }

        public function delete(Pays $pays) {
            try {
                $req = $this->bdd->prepare( 'DELETE FROM pays WHERE idPays = :id');
                $req->bindValue(':id', $pays->getIdPays(), PDO::PARAM_INT);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        public function update(Pays $pays) {
            try {
                $req = $this->bdd->prepare( 'UPDATE pays SET nomPays = :nomPays, idReponse = :idReponse WHERE idPays = :id');
                $req->bindValue(':id', $pays->getIdPays(), PDO::PARAM_INT);
                $req->bindValue(':nompays', $pays->getNomPays(), PDO::PARAM_STR);
                $req->bindValue(':idReponse', $pays->getIdReponse(), PDO::PARAM_INT);
                $req->execute();

            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        public function isAlreadyExist(Pays $pays){
            $alreadyexist = false;
            $listePays = $this->getAll();
            foreach ($listePays as $PAYS){
                if ( $PAYS->getNomPays() === $pays->getNomPays() ){
                    $alreadyexist = true;
                }
            }
            return $alreadyexist;
        }
    }
?> 
