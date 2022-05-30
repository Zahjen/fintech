<?php
    class QuestionManager {

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
        
        public function getById($idQuestion) {
            $question = null;
            try{
                $idQuestion = (int)$idQuestion;
                $req = $this->bdd->prepare('SELECT idQuestion, labelQuestion, type, idCategorie FROM question WHERE idQuestion = ?');
                $req->execute(array($idQuestion));
                $donnees = $req->fetch(PDO::FETCH_ASSOC);
                $question = new Question();
                $question->hydrate($donnees);
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $question;
        }


        public function getAll() {
            $listeQuestions = [];
            try{
                $req = $this->bdd->prepare( 'SELECT idQuestion, labelQuestion, type, idCategorie FROM question' );
                $req->execute();
                while ($donnees = $req->fetch(PDO::FETCH_ASSOC)) {
                    $question = new Question();
                    $question->hydrate($donnees);
                    $listeQuestions[] = $question;
                }
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
            return $listeQuestions;
        }


        public function add(Question $question){
            try{
                $req = $this->bdd->prepare( 'INSERT INTO question(labelQuestion, type, idCategorie) VALUES(:labelQuestion, :type, :idCategorie)' );
                $req->bindValue(':labelQuestion', $question->getLabelQuestion(), PDO::PARAM_STR);
                $req->bindValue(':type', $question->getType(), PDO::PARAM_STR);
                $req->bindValue(':idCategorie', $question->getIdCategorie(), PDO::PARAM_INT);
                $req->execute();
            } catch (Exception $erreur) {
                die('Erreur : '.$erreur->getMessage());
            }
        }


        public function update(Question $question){
            try{
                $req = $this->bdd->prepare('UPDATE question SET labelQuestion = :labelQuestion, type = :type, idCategorie = :idCategorie WHERE idQuestion = :idQuestion');
                $req->bindValue(':idQuestion', $question->getIdQuestion(), PDO::PARAM_INT);
                $req->bindValue(':labelQuestion', $question->getLabelQuestion(), PDO::PARAM_STR);
                $req->bindValue(':type', $question->getType(), PDO::PARAM_STR);
                $req->bindValue(':idCategorie', $question->getIdCategorie(), PDO::PARAM_INT);
                $req->execute();
            }
            catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }
 
        public function delete(Question $question) {
            try{
                $req = $this->bdd->prepare( 'DELETE FROM question WHERE idQuestion = :idQuestion' );
                $req->bindValue(':idQuestion', $question->getIdQuestion(), PDO::PARAM_INT);
                $req->execute();
            }
            catch(Exception $erreur){
                die('Erreur : '.$erreur->getMessage());
            }
        }
    }

?> 