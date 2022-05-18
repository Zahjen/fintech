<?php
    class secteurManager {

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
        public function getById(int $idSecteur) {
            $secteurActivite = null;
            try{
                $req = $this->bdd->prepare('SELECT idSecteur, labelSecteur FROM secteuractivite WHERE idSecteur = ?');
                $req->execute(array($idSecteur));
                $donnees = $req->fetch(PDO::FETCH_ASSOC);
                $secteurActivite = new SecteurActivite();
                $secteurActivite->hydrate($donnees);
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $secteurActivite;
        }

        public function getAll() {
            $listeSecteursActivitees = [];
            try{
                $req = $this->bdd->prepare( 'SELECT idSecteur,labelSecteur FROM secteuractivite' );
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $secteur = new SecteurActivite();
                    $secteur->hydrate($donnees);
                    $listeSecteursActivitees[] = $secteur;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listeSecteursActivitees;
        }


        public function add(SecteurActivite $secteur){
            try {
                $req = $this->bdd->prepare(' INSERT INTO secteur(labelSecteur) VALUES(:labelSecteur) ');
                $req->bindValue(':labelSecteur', $secteur->getLabelSecteur());
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        public function update(SecteurActivite $secteur){
            try{
                $req = $this->bdd->prepare('UPDATE secteur SET labelSecteur = :labelSecteur WHERE idSecteur = :idSecteur');
                $req->bindValue(':idSecteur', $secteur->getIdSecteur(), PDO::PARAM_INT);
                $req->bindValue(':labelSecteur', $secteur->getLabelSecteur(), PDO::PARAM_STR);
                $req->execute();
            } catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }

        public function delete(SecteurActivite $secteur) {
            try{
                $req = $this->bdd->prepare( 'DELETE FROM secteur WHERE idSecteur = :idSecteur' );
                $req->bindValue(':idSecteur', $secteur->getIdSecteur(), PDO::PARAM_INT);
                $req->execute();
            } catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }
    }

?> 