<?php
    class CategorieManager {

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
        public function getById($idCategorie) {
            $laCategorie= null;
            try{
                $idCategorie = (int)$idCategorie;
                $req = $this->bdd->prepare('SELECT idCategorie, labelCategorie FROM categorie WHERE idCategorie = ?');
                $req->execute(array($idCategorie));
                $donnees = $req->fetch(PDO::FETCH_ASSOC);
                $laCategorie = new Categorie();
                $laCategorie->hydrate($donnees);
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $laCategorie;
        }


        public function getAll() {
            $listeCategories = [];
            try{
                $req = $this->bdd->prepare( 'SELECT idCategorie,labelCategorie FROM categorie' );
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $categorie = new Categorie();
                    $categorie->hydrate($donnees);
                    $listeCategories[] = $categorie;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listeCategories;
        }


        public function add(Categorie $categorie){
            try {
                $req = $this->bdd->prepare(' INSERT INTO categorie(labelCategorie) VALUES(:labelCategorie) ');
                $req->bindValue(':labelCategorie', $categorie->getLabelCategorie(), PDO::PARAM_STR);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }


        public function update(Categorie $categorie){
            try{
                $req = $this->bdd->prepare('UPDATE categorie SET labelCategorie = :labelCategorie WHERE idCategorie = :idCategorie');
                $req->bindValue(':idCategorie', $categorie->getIdCategorie(), PDO::PARAM_INT);
                $req->bindValue(':labelCategorie', $categorie->getIdCategorie(), PDO::PARAM_STR);
                $req->execute();
            } catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }

        
        public function delete(Categorie $categ) {
            try{
                $req = $this->bdd->prepare( 'DELETE FROM categorie WHERE idCategorie = :idCategorie' );
                $req->bindValue(':idCategorie', $categ->getIdCategorie(), PDO::PARAM_INT);
                $req->execute();
            } catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }
    }

?> 