<?php
    class PointObtenuManager {
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

        // méthodes
        public function getById(int $id) {
            $monPointObtenu = [];
            try {
                $req = $this->bdd->prepare('SELECT idQuestion, idReponse, pointQuestion FROM pointobtenu WHERE idQuestion = :idQuestion');
                $req->bindValue(':idQuestion', $id, PDO::PARAM_INT);
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $pointObt = new PointObtenu();
                    $pointObt->hydrate($donnees);
                    $monPointObtenu[] = $pointObt;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $monPointObtenu;
        }
        
        public function getByIdQuestionIdReponse($idQuestion, $idReponse) {
            $monPointObtenu = [];
            try {
                $req = $this->bdd->prepare('SELECT idQuestion, idReponse, pointQuestion FROM pointobtenu WHERE idQuestion = :idQuestion AND idReponse = :idReponse');
                $req->bindValue(':idQuestion', $idQuestion, PDO::PARAM_INT);
                $req->bindValue(':idReponse', $idReponse, PDO::PARAM_INT);
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $pointObt = new PointObtenu();
                    $pointObt->hydrate($donnees);
                    $monPointObtenu[] = $pointObt;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $monPointObtenu;
        }

        public function getAll() {
            $listePointsObtenus = [];
            try {
                $req = $this->bdd->prepare( 'SELECT idQuestion, idReponse, pointQuestion FROM pointobtenu');
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $pointObt = new PointObtenu();
                    $pointObt->hydrate($donnees);
                    $listePointsObtenus[] = $pointObt;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listePointsObtenus;
        }


        public function add(PointObtenu $point){
            try {
                $req = $this->bdd->prepare(' INSERT INTO pointobtenu(idQuestion, idReponse, pointQuestion) VALUES(:idQuestion, :idReponse, :pointQuestion) ');
                $req->bindValue(':idQuestion', $point->getIdQuestion(), PDO::PARAM_INT);
                $req->bindValue(':idReponse', $point->getIdReponse(), PDO::PARAM_INT);
                $req->bindValue(':pointQuestion', $point->getPointQuestion());
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        // méthode delete avec une seule condition dans le WHERE
        // surement pas nécéssaire...
        public function delete2(PointObtenu $pointObt) {
            try {
                $req = $this->bdd->prepare( 'DELETE FROM pointobtenu WHERE idQuestion = :id');
                $req->bindValue(':id', $pointObt->getIdQuestion(), PDO::PARAM_INT);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        // méthode delete avec les deux conditions dans le WHERE
        public function delete(PointObtenu $pointObt) {
            try {
                $req = $this->bdd->prepare( 'DELETE FROM pointobtenu WHERE idQuestion = :id AND idReponse = :idReponse');
                $req->bindValue(':id', $pointObt->getIdQuestion(), PDO::PARAM_INT);
                $req->bindValue(':idReponse', $pointObt->getIdReponse(), PDO::PARAM_INT);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        // méthode update avec une seule condition dans le WHERE idQuestion = :id 
        public function update(PointObtenu $pointObt) {
            try {
                $req = $this->bdd->prepare( 'UPDATE pointobtenu SET idReponse = :idReponse, pointQuestion = :pointQuestion WHERE idQuestion = :id');
                $req->bindValue(':id', $pointObt->getIdQuestion(), PDO::PARAM_INT);
                $req->bindValue(':idReponse', $pointObt->getIdReponse(), PDO::PARAM_INT);
                $req->bindValue(':pointQuestion', $pointObt->getPointQuestion());
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        // méthode update avec deux conditions dans le WHERE idQuestion = :id et idReponse = :idReponse
        public function update2($idQuestion, $idReponse) {
            try {
                $req = $this->bdd->prepare( 'UPDATE pointobtenu SET idReponse = :idReponse WHERE idQuestion = :id AND idReponse = :idReponse');
                $req->bindValue(':id', $idQuestion, PDO::PARAM_INT);
                $req->bindValue(':idReponse', $idReponse, PDO::PARAM_INT);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }
    }
?> 