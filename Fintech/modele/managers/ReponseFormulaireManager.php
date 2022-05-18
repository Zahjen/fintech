<?php
    class ReponseFormulaireManager {

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
        // getById principal sur idFormulaire
        public function getById($idFormulaire) {
            $reponseFormulaire=[];
            try{
                $req = $this->bdd->prepare('SELECT idFormulaire,idQuestion,idReponsePresta FROM reponseformulaire WHERE idFormulaire= :idFormulaire');   
                $req->bindValue(':idFormulaire',$idFormulaire, PDO::PARAM_INT);
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $repForm = new ReponseFormulaire();
                    $repForm->hydrate($donnees);
                    $reponseFormulaire[] = $repForm;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $reponseFormulaire;
        }

        // getById sur idQuestion
        // nécéssaire ? l'interêt de get un formulaire, et de récupérer son idFormulaire et ces idQuestion qui ne sont pas modifiables, et l'idReponsePresta qui lui est modifiable
        public function getByIdQuestion($idQuestion) {
            $reponseFormulaire=[];
            try{
                $req = $this->bdd->prepare('SELECT idFormulaire,idQuestion,idReponsePresta FROM reponseformulaire WHERE idQuestion = :idQuestion');  
                $req ->bindValue(':idQuestion',$idQuestion, PDO::PARAM_INT);
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $repForm = new ReponseFormulaire();
                    $repForm->hydrate($donnees);
                    $reponseFormulaire[] = $repForm;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $reponseFormulaire;
        }

        // getById sur didFormulaire et idQuestion
        // nécéssaire aussi ? 
        public function getByTwoId($idFormulaire,$idQuestion) {
            $reponseFormulaire=[];
            try{
                $req = $this->bdd->prepare('SELECT idFormulaire,idQuestion,idReponsePresta FROM reponseformulaire WHERE idFormulaire = :idFormulaire and idQuestion= :idQuestion');
                $req ->bindValue(':idFormulaire',$idFormulaire, PDO::PARAM_INT);
                $req ->bindValue(':idQuestion',$idQuestion, PDO::PARAM_INT);
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $repForm = new ReponseFormulaire();
                    $repForm->hydrate($donnees);
                    $reponseFormulaire[] = $repForm;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $reponseFormulaire;
        }

        public function getAll() {
            $listeReponsesFormulaires = [];
            try {
                $req = $this->bdd->prepare( 'SELECT idFormulaire,idQuestion,idReponsePresta FROM reponseformulaire');
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $reponseFormulaire = new ReponseFormulaire();
                    $reponseFormulaire->hydrate($donnees);
                    $listeReponsesFormulaires[] = $reponseFormulaire;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listeReponsesFormulaires;
        }


        public function add(ReponseFormulaire $reponseformulaire){
            try{
                $req = $this->bdd->prepare(' INSERT INTO reponseformulaire(idFormulaire, idQuestion, idReponsePresta) VALUES(:idFormulaire, :idQuestion, :idReponsePresta) ');
                $req->bindValue(':idFormulaire', $reponseformulaire->getIdFormulaire(), PDO::PARAM_INT);
                $req->bindValue(':idQuestion', $reponseformulaire->getIdQuestion(), PDO::PARAM_INT);
                $req->bindValue(':idReponsePresta', $reponseformulaire->getIdReponsePresta());
                $req->execute();
            }
            catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }

        // Je t'ai fais deux méthodes d'update

        // première méthode qui update l'idReponsePresta en fonction de l'idQuestion et l'idFormulaire
        // qui peut s'intitule 'update' si c'est celle là que tu utiliseras principalement
        public function updateTwoConditions(ReponseFormulaire $reponseformulaire){
            try{
                $req = $this->bdd->prepare('UPDATE reponseformulaire SET idReponsePresta = :idReponsePresta WHERE idFormulaire = :idFormulaire AND idQuestion = :idQuestion');
                $req->bindValue(':idFormulaire', $reponseformulaire->getIdFormulaire(), PDO::PARAM_INT);
                $req->bindValue(':idQuestion', $reponseformulaire->getIdQuestion());
                $req->bindValue(':idReponsePresta', $reponseformulaire->getidReponsePresta());
                $req->execute();
            }
            catch(Exception $e){
                die('Erreur : '.$e->getMessage());
            }
        }
        
        // deuxième méthode qui update l'idReponsePresta seulement en fonction de l'idQuestion
        // mais ça va changer l'idReponsePresta de plusieurs idFormulaire non ??
        public function updateOneCondition(ReponseFormulaire $reponseformulaire){
            try{
                $req = $this->bdd->prepare('UPDATE reponseformulaire SET idReponsePresta = :idReponsePresta WHERE idQuestion = :idQuestion');
                $req->bindValue(':idQuestion', $reponseformulaire->getIdQuestion(), PDO::PARAM_INT);
                $req->bindValue(':idReponsePresta', $reponseformulaire->getIdReponsePresta());
                $req->execute();
            }
            catch(Exception $e){
                die('Erreur : '.$e->getMessage());
            }
        }

        
        public function delete(ReponseFormulaire $ReponseFormulaire) {
            try{
                $req = $this->bdd->prepare( 'DELETE FROM reponseformulaire WHERE idFormulaire = :idFormulaire' );
                $req->bindValue(':idFormulaire', $ReponseFormulaire->getIdFormulaire(), PDO::PARAM_INT);
                $req->execute();
            }
            catch(Exception $e){
                die('Erreur : '.$e->getMessage());
            }
        }

    }

?> 