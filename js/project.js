// Au chargement de la fenêtre
window.onload = function() {

    /* ===========================================================================================
     * Définition des variables Globale
     * ===========================================================================================
     * var canvasWidth = 900;   [Définition de la largeur du canvas]
     * var canvasHeigth = 600;  [Définition de la hauteur du canvas]
     * var blockSize = 20;      [Définition de la taille de chaque block]
     * var context;             [Définition du contexte du dessin]
     * var delay = 100;         [Définition du délai]
     * var snakee;              [Définition du serpent]
     * var apple;               [Définition de la pomme]
     */
    var canvasWidth = 900;
    var canvasHeigth = 600;
    var blockSize = 20;
    var context;
    var delay = 100;
    var snakee;
    var apple;

    /* ===========================================================================================
     * [Exécution de la déclaration permettant l'initialisation du jeu]
     * ===========================================================================================
     * init();                  
     */
    init();

    /* ===========================================================================================
     * [Déclaration de notre fonction d'initialisation]
     * ===========================================================================================
     * function init()
     * {
     *      ----- [On créer le canvas ici] -----
     *    var canvas = document.createElement('canvas');
     *      ----- [On spécifie ici, la largeur du canvas] ----- 
     *    canvas.width = canvasWidth;
     *      ----- [Définition de la hauteur du canvas] -----
     *    canvas.height = canvasHeigth;
     *      ----- [Définition de la bordure. /!\ De base la bordure est de couleur noir] -----
     *    canvas.style.border = "1px solid";
     *      ----- [On accroche ici au body le canvas] -----
     *    document.body.appendChild(canvas);
     *      ----- [Définition du rendu 2d/3d du jeu] -----
     *    context = canvas.getContext('2d');
     *      ----- [Définition d'un déplacement sur la droite du serpent] -----
     *      // [ [axe x,axe y], [axe x,axe y], [axe x,axe y]], "direction"
     *    snakee = new Snake([[6,4], [5,4], [4,4]], "right");
     *      ----- [Définition de l'apparition de la pomme] -----
     *      // [axe x, axe y]
     *   apple = new Pomme([10, 10]);
     *      ----- [Exécution de la fonction permettant un rafraîchissement du jeu] -----
     *    refreshCanvas();
     * }
     */
    function init()
    {
        var canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeigth;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        context = canvas.getContext('2d');
        snakee = new Snake([[6,4], [5,4], [4,4]], "right");
        apple = new Pomme([10, 10]);
        refreshCanvas();
    } // Fin function init()
    
    /* ===========================================================================================
     * [Déclaration de notre fonction de rafraîchissement]
     * ===========================================================================================
     * function refreshCanvas()          
     * {
     *      ----- [Définition de l'effacement de notre block] -----
     *      // 4 propriétés : (position gauche, position haut, largeur, hauteur);
     *      context.clearRect(0,0, canvasWidth, canvasHeigth);
     *      ----- [Exécution de la fonction permettant au serpent d'avancer] ----- 
     *      snakee.advance();
     *      ----- [Exécution de la fonction permettant de dessiner le serpent dans le canvas] -----
     *      snakee.draw();
     *      ----- [Exécution de la fonction permettant de dessiner la pomme dans le canvas] -----
     *      appel.draw();
     *      ----- [Exécution du temps d'apparition des block de notre serpent] -----
     *      setTimeout(refreshCanvas, delay);
     * }
     */
    function refreshCanvas()
    {
        context.clearRect(0,0,canvasWidth,canvasHeigth);
        snakee.advance();
        snakee.draw();
        apple.draw();
        setTimeout(refreshCanvas, delay);
    } // Fin function refreshCanvas()

    /* ===========================================================================================
     * [Déclaration de notre fonction permettant de dessiner les block du serpent]
     * ===========================================================================================
     * function drawBlock(context, position)          
     * {
     *      ----- [Définition la variable permettant de dessiner horizontalement] -----
     *      var x = position[0] * blockSize;
     *      ----- [Définition la variable permettant de dessiner verticalement] -----
     *      var y = position[1] * blockSize;
     *      ----- [On dessine un rectangle avec fillRect()] -----
     *      // 4 propriétés (position sur l'axe des x, position sur l'axe des y, taille du block, taille du block)
     *      context.fillRect(x,y, blockSize, blockSize);
     * }
     */
    function drawBlock(context, position)
    {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        context.fillRect(x,y, blockSize, blockSize);
    }// Fin function drawBlock(....)


    /* ===========================================================================================
     * [Définition des fonctions de notre serpent]
     * ===========================================================================================
     * function Snake(paramètre 1 body, paramètre 2  direction)          
     * {
     *      ----- [this permet de définir l'objet courant. Donc ici c'est le paramètre 1 de notre fonction] -----
     *      this.body = body;
     *      ----- [this permet ici de définir la direction. Donc c'est le paramètre 2] -----
     *      this.direction = direction
     *      ----- [méthode pour dessiner en fonction des paramètres saisi plus haut] -----
     *      this.draw = function() 
     *      {
     *            ----- [Ici on sauvegarde l'emplacement de notre emplacement actuel] -----
     *         context.save();
     *            ----- [Définition de la couleur de remplissage] -----
     *         context.fillStyle = "#f54f56";
     *            ----- [Création d'une boucle permettant de voir la longueur de notre serpent] -----
     *            // Définition d'une variable d'incrémentation'
     *            // Si notre incrémentation est inférieur à 0 donc -1
     *            // Alors, on ajoute 1 
     *         for( var i = 0; i < this.body.length; i++) 
     *         {
     *                ----- [On dessine ici selon le résultat issu de notre boucle] -----
     *             drawBlock(context, this.body[i]);
     *         }
     *            ----- [On restore ici notre emplacement] -----
     *         context.restore();
     *      };
     *      ----- [méthode pour avancer avec le serpent] ----- 
     *      this.advance = function()
     *      {
     *      ----- [Création d'une variable pour la position suivante] -----
     *         var nextPosition = this.body[0].slice();
     *      ----- [Boucle "tant que"] -----
     *         switch(this.direction)
     *         {
     *             -------------------- Direction à gauche
     *             case "left":
     *             nextPosition[0] -= 1;
     *             break;
     *             
     *             -------------------- Direction à droite
     *             case "right":
     *             nextPosition[0] += 1;
     *             break;
     *
     *             -------------------- Direction en bas
     *             case "down":
     *             nextPosition[1] += 1;
     *             break;
     *
     *             -------------------- Direction en haut
     *             case "up":
     *             nextPosition[1] -= 1;
     *             break;
     *
     *             -------------------- Direction par défaut
     *             default: 
     *                      ----------- throw() est une fonction pour les messages d'erreur
     *                 throw("Invalid Direction");
     *          }
     *          ----- [méthode unshift() permet d'ajouter un élément au début d'un tableau (ici notre tête) ] -----
     *          this.body.unshift(nextPosition);
     *          ----- [méthode pop() permet de retirer un élément à la fin d'un tableau (ici notre queue) ] -----
     *          this.body.pop();
     *      };
     * 
     *          ----- [this correspond ici à la nouvelle direction] -----
     *      this.setDirection = function(newDirection)
     *      {
     *               ----- [Définition de certaines restrictions dans le déplacement] -----
     *         // Exemple : Si nous allons en bas, ça n'a pas de sens d'aller en haut, on écraserait le corps du serpent
     *         var allowedDirection;
     *              ----- [Conception d'une boucle de restriction selon la direction utilisé] -----
     *         switch(this.direction)
     *         {
     *              // Restriction pour la "Gauche" ET la "Droite" 
     *              case "left":
     *              case "right":
     *                  allowedDirection = ["up", "down"];
     *                  break;
     * 
     *              // Restriction pour le "Haut" ET le "Bas"
     *              case "down":
     *              case "up":
     *                  allowedDirection = ["left", "right"];
     *                  break;
     *
     *              // Paramètre par défault ou l'on définit simple un message d'erreur comme quoi la direction n'est pas valide
     *              default: 
     *                  throw("Invalid Direction");
     *          }
     *              ----- [Conception d'une condition selon notre emplacement dans le tableau] -----
     *              // Si la direction est supérieur à -1 dans notre tableau, alors on avance
     *          if(allowedDirection.indexOf(newDirection) > -1)
     *          {
     *              this.direction = newDirection;
     *          }
     *      };
     * 
     *  }
     */
    function Snake(body, direction)
    {
        this.body = body;
        this.direction = direction;
        this.draw = function() 
        {
            context.save();
            context.fillStyle = "#f54f56";
            for( var i = 0; i < this.body.length; i++) 
            {
                drawBlock(context, this.body[i]);
            }
            context.restore();
        }; // Fin méthode this.draw

        this.advance = function()
        {
            var nextPosition = this.body[0].slice();
            switch(this.direction)
            {
                case "left":
                nextPosition[0] -= 1;
                break;

                case "right":
                nextPosition[0] += 1;
                break;

                case "down":
                nextPosition[1] += 1;
                break;

                case "up":
                nextPosition[1] -= 1;
                break;

                default: 
                    throw("Invalid Direction");
            } // Fin boucle switch(this.direction)
            this.body.unshift(nextPosition);
            this.body.pop();
        }; // Fin de la méthode this.advance...
        this.setDirection = function(newDirection)
        {
            var allowedDirection;
            switch(this.direction)
            {
                case "left":
                case "right":
                    allowedDirection = ["up", "down"];
                    break;

                case "down":
                case "up":
                    allowedDirection = ["left", "right"];
                    break;

                default: 
                    throw("Invalid Direction");
            } // Fin switch(this.direction)
            if(allowedDirection.indexOf(newDirection) > -1)
            {
                this.direction = newDirection;
            } // Fin condition allowedDirection
        }; // Fin de la méthode this.setDirection

    } // Fin de la function Snake

    /* ===========================================================================================
     * [Définition des fonctions de notre Pomme]
     * ===========================================================================================
     * function Pomme(position)          
     * {
     *      ----- [Définition la variable permettant de dessiner horizontalement] -----
     *      this.position = position;
     *      ----- [Définition la variable permettant de dessiner verticalement] -----
     *      this.draw = function()
     *      {
     *              ----- [Sauvegarde de l'emplacement du context] -----
     *          context.save();
     *              ----- [Définition de la couleur de la pomme] -----
     *          context.fillStyle = "#33cc33";
     *              ----- [Initialise un nouveau trajet.] -----
     *              // ------- Recherche personnel
     *              // Lorsque initialisé, les futurs fonctions de dessin 
     *              // sont dirigées dans le trajet et utilisées pour spécifier le trajet.
     *              // ------- Source "Dessiner des trajets" : https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Formes_g%C3%A9om%C3%A9triques
     *          context.beginPath();
     *              ----- [Définition d'une variable pour concevoir un cercle] -----
     *          var radius = blockSize/2;
     *              ----- [Définition du centre de notre axe x] -----
     *          var x = position[0]*blockSize + radius;
     *              ----- [Définition de la hauteur de l'axe y] -----
     *          var y = position[1]*blockSize + radius;
     *              ----- [Calcul mathématique pour concevoir un cercle] -----
     *          context.arc(x,y, radius, 0, Math.PI*2, true);
     *              ----- [Définition de la form tout en remplissant ce dernier] -----
     *          context.fill();
     *              ----- [Restore le context] -----
     *          context.restore();
     *      };
     * }
     */
    function Pomme(position)
    {
        this.position = position;
        this.draw = function()
        {
            context.save();
            context.fillStyle = "#33cc33";
            context.beginPath();
            var radius = blockSize/2;
            var x = position[0]*blockSize + radius;
            var y = position[1]*blockSize + radius;
            context.arc(x,y, radius, 0, Math.PI*2, true);
            context.fill();
            context.restore();
        }; // Fin de la méthode this.draw
    } // Fin de la fonction Pomme


    /* ===========================================================================================
     * [Définition de la reconnaissance du clavier lorsque qu'un utilisateur appuie sur certaines touches]
     * ===========================================================================================
     * document.onkeydown = function handleKeyDown(e) // e pour évènement
     * {
     *          ----- [] -----
     *      var key = e.keyCode;
     *          ----- [] -----
     *      var newDirection;
     *          ----- [] -----
     *      switch(key)
     *      {
     *          // 37 correspond à la touche fléché représentant la flèche pointant vers la gauche
     *          case 37:
     *              newDirection = "left";
     *              break;
     * 
     *          // 38 correspond à la touche fléché représentant la flèche pointant vers le haut
     *          case 38:
     *              newDirection = "up";
     *              break;
     *
     *          // 39 correspond à la touche fléché représentant la flèche pointant vers la droite
     *          case 39:
     *              newDirection = "right";
     *              break;
     *
     *          // 40 correspond à la touche fléché représentant la flèche pointant vers le bas 
     *          case 40:
     *              newDirection = "down";
     *              break;
     * 
     *          // default étant la touche par défault. Sauf ici on annule la touche si elle n'est pas correcte
     *          default:
     *              return;
     *      }
     *          ----- [Définition de la direction pour notre serpent] -----
     *      snakee.setDirection(newDirection);
     * }
     */
    document.onkeydown = function handleKeyDown(e)
    {
        var key = e.keyCode;
        var newDirection;
        switch(key)
        {
            case 37:
                newDirection = "left";
                break;
            case 38:
                newDirection = "up";
                break;
            case 39:
                newDirection = "right";
                break;
            case 40:
                newDirection = "down";
                break;

            default: 
                return;
        } // Fin du switch(key)
        snakee.setDirection(newDirection);
    } // Fin document.onkeydown...

} // Fin windows.onload()