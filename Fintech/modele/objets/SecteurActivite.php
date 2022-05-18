<?php
    class SecteurActivite implements jsonSerializable {

        // -------------------------------------------------
        // attributs
        private $idSecteur;
        private $labelSecteur;  
        
        // -------------------------------------------------
        // getters 
        public function getIdSecteur() {
            return $this->idSecteur;
        }
        public function getLabelSecteur() {
            return $this->labelSecteur;
        }
        
        // -------------------------------------------------
        // setters
        public function setIdSecteur($idSecteur) {
            $this->idSecteur = $idSecteur;
        } 
        public function setLabelSecteur($labelSecteur) {
            $this->labelSecteur = $labelSecteur;
        }
        
        // -------------------------------------------------
        // hydrate
        public function hydrate($donnees){
            foreach($donnees as $key => $value){
                $method = 'set'.ucfirst($key);
                if(method_exists($this, $method)){
                    $this->$method($value);
                }
            }
        }
        
        // -------------------------------------------------
        // json
        public function jsonSerialize(){
            $json = [
                'idSecteur' => $this->getIdSecteur(),
                'labelSecteur' => $this->getLabelSecteur()
            ];
            return $json;
        }
    }
?> 