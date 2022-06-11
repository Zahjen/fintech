<?php
    class FormulaireManager {
        
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
            $monFormulaire = null;
            try {
                $req = $this->bdd->prepare('SELECT idFormulaire,idClient,idPrestataire,idSecteur, idPays, totalPoints FROM formulaire WHERE idFormulaire = ? ORDER BY idFormulaire DESC');
                $req->execute(array($id));
                $donnees = $req->fetch(PDO::FETCH_ASSOC);
                $monFormulaire = new Formulaire();
                $monFormulaire->hydrate($donnees);
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $monFormulaire;
        }

        public function getByIdClient(int $id) {
            $monFormulaire = null;
            try {
                $req = $this->bdd->prepare( 'SELECT idFormulaire,idClient,idPrestataire,idSecteur, idPays, totalPoints FROM formulaire WHERE idClient = :idClient ORDER BY idFormulaire DESC');
                $req->bindValue(':idClient', $id, PDO::PARAM_INT);
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $form = new Formulaire();
                    $form->hydrate($donnees);
                    $monFormulaire[] = $form;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $monFormulaire;
        }

        public function getAll() {
            $listeFormulaires = [];
            try {
                $req = $this->bdd->prepare( 'SELECT idFormulaire,idClient,idPrestataire,idSecteur, idPays, totalPoints FROM formulaire ORDER BY idFormulaire DESC');
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $form = new Formulaire();
                    $form->hydrate($donnees);
                    $listeFormulaires[] = $form;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listeFormulaires;
        }

        public function add(Formulaire $formulaire){
            try {
                $req = $this->bdd->prepare('INSERT INTO formulaire(idClient, idPrestataire, idSecteur, idPays, totalPoints) VALUES(:idClient, :idPrestataire, :idSecteur, :idPays, :totalPoints) ');
                $req->bindValue(':idClient', $formulaire->getIdClient(), PDO::PARAM_INT);
                $req->bindValue(':idPrestataire', $formulaire->getIdPrestataire(), PDO::PARAM_INT);
                $req->bindValue(':idSecteur', $formulaire->getIdSecteur(), PDO::PARAM_INT);
                $req->bindValue(':idPays', $formulaire->getIdPays(), PDO::PARAM_INT);
                $req->bindValue(':totalPoints', $formulaire->getTotalPoints(), PDO::PARAM_INT);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        // Quand on ajoute une form à la BDD, normalement, on est plus censé la modifier
        public function update(Formulaire $formulaire){
            try{
                $req = $this->bdd->prepare('UPDATE formulaire SET idClient = :idClient, idPrestataire = :idPrestataire, idSecteur = :idSecteur, idPays = :idPays, totalPoints = :totalPoints  WHERE idFormulaire = :id');
                $req->bindValue(':id', $formulaire->getIdFormulaire(), PDO::PARAM_INT);
                $req->bindValue(':idClient', $formulaire->getIdClient(), PDO::PARAM_INT);
                $req->bindValue(':idPrestataire', $formulaire->getIdPrestataire(), PDO::PARAM_INT);
                $req->bindValue(':idSecteur', $formulaire->getIdSecteur(), PDO::PARAM_INT);
                $req->bindValue(':idPays', $formulaire->getIdPays(), PDO::PARAM_INT);
                $req->bindValue(':totalPoints', $formulaire->getTotalPoints(), PDO::PARAM_INT);
                $req->execute();
            }
            catch(Exception $e){
                die('Erreur : '.$e->getMessage());
            }
        }

        public function delete(Formulaire $formulaire) {
            try{
                $req = $this->bdd->prepare( 'DELETE FROM formulaire WHERE idFormulaire = :idFormulaire' );
                $req->bindValue(':idFormulaire', $formulaire->getIdFormulaire(), PDO::PARAM_INT);
                $req->execute();
            }
            catch(Exception $e){
                die('Erreur : '.$e->getMessage());
            }
        }
    }

?> 
