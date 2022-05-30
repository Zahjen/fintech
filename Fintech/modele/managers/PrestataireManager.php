<?php
    class PrestataireManager {

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
        public function getById(int $idPrestataire) {
            $monPrestataire = null;
            try{
                $req = $this->bdd->prepare('SELECT idPrestataire, nomPrestataire FROM prestataire WHERE idPrestataire = ?');
                $req->execute(array($idPrestataire));
                $donnees = $req->fetch(PDO::FETCH_ASSOC);
                $monPrestataire = new Prestataire();
                $monPrestataire->hydrate($donnees);
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $monPrestataire;
        }

        public function getAll() {
            $listePrestataires = [];
            try{
                $req = $this->bdd->prepare( 'SELECT idPrestataire,nomPrestataire FROM prestataire' );
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $prestataire = new Prestataire();
                    $prestataire->hydrate($donnees);
                    $listePrestataires[] = $prestataire;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listePrestataires;
        }


        public function add(Prestataire $prestataire){
            try{
                $req = $this->bdd->prepare(' INSERT INTO prestataire(nomPrestataire) VALUES(:nomPrestataire) ');
                $req->bindValue(':nomPrestataire', $prestataire->getNomPrestataire());
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }


        public function delete(Prestataire $prestataire) {
            try{
                $req = $this->bdd->prepare( 'DELETE FROM prestataire WHERE idPrestataire = :idPrestataire');
                $req->bindValue(':idPrestataire', $prestataire->getIdPrestataire(), PDO::PARAM_INT);
                $req->execute();
            }
            catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }


        public function update(Prestataire $prestataire){
            try{
                $req = $this->bdd->prepare('UPDATE prestataire SET nomPrestataire = :nomPrestataire WHERE idPrestataire = :idPrestataire');
                $req->bindValue(':idPrestataire', $prestataire->getIdPrestataire(), PDO::PARAM_INT);
                $req->bindValue(':nomPrestataire', $prestataire->getNomPrestataire(), PDO::PARAM_STR);
                $req->execute();
            }
            catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }

        
        public function isAlreadyExist(Prestataire $prestataire){
            $alreadyexist = false;
            $listePrestataires = $this->getAll();
            foreach ($listePrestataires as $prest){
                if ( $prest->getNomPrestataire() === $prestataire->getNomPrestataire() ){
                    $alreadyexist = true;
                }
            }
            return $alreadyexist;
        }
    }
?> 