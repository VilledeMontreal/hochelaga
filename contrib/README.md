# Contributions

## Objectif
Ce dossier vise a centraliser les contributions CSS a la boite a outils des SPAs de la Ville de Montreal, que ce soit pour les citoyens ou les employés.

Certains des objectifs de la boite à outils sont :
- de faciliter la réutilisation d'un look'n'feel pour les citoyens et un autre pour les employés.
- de centraliser les customisations CSS de la Ville qui s'appliquent par dessus Bootstrap 4).
- standardiser les structures HTMLs et CSS des SPAs pour faciliter le passage d'un projet à l'autre.

## Processus
1. Vous identifiez un élément de page ou un composant Angular potentiellement réutilisable par une autre équipe ou un autre projet.

2. Une fois que vous avez établi un premier CSS/SASS/HTML dans votre projet spécifique, vous pouvez préparer la contribution à la boîte à outils en suivant les prochaines étapes.

3. A partir de *develop*, creer une branche *feature/contrib/nom-de-votre-contribution* dans laquelle vous aurez ajouter un dossier de la structure suivante

        /contrib/nom-de-votre-contribution
        /description.md
        /screenshot-desktop.png
        /screenshot-mobile.png

4. Tester votre contribution selon la section "Tests avant de finaliser le dépôt"

5. Déposer les fichiers CSS/SASS/HTML appropriés pour réaliser cet ajout.

6. Faire un Pull-Request vers Develop quand vous êtes prêt à montrer votre contribution. 

7. L'équipe de la boîte à outils va intégrer votre contribution ou la commenter et rejeter la Pull-Request pour vous permettre de faire les améliorations requises.

8. Votre contribution sera ensuite disponible dans la boite à outils de dév.

9. Ajuster votre projet pour basculer à la version "boîte-à-outil" de cet élément CSS/SASS/HTML


## Contenu des fichiers

### *description.md*
Une descriptiond de votre ajout, que ce soit pour un élément simple ou un composant angular réutilisable, son but, son fonctionnement et ses particularités.

Si possible, indiquer des liens vers des composants similaires ailleurs ou des liens vers des captures d'écran.

### *screenshot-desktop.png*
Une capture d'écran de votre composant rendu dans un affichage desktop.

### *screenshot-mobile.png*
Une capture d'écrand de votre composant rendu dans un affichage mobile.


## Tests avant de finaliser le dépôt
Pour accélérer le traitement de votre contribution, SVP, regarder les points ci-dessous :

*Rappel :* 
- Bootstrap est mobile first. Il faut donc coder le HTML en consequence, meme pour une application desktop seulement (avec les classes bootstrap).

*À tester :*
- Fonctionne sur les navigateurs Chromes, Safari, Firefox, Edge
- Fonctionne dans une vue sur Safari Mobile et Chrome mobile
- Tester avec Lighhouse de Chrome (voir l'onglet "Audits" des outils de Développeur de Chrome). Corriger ce qui provient du html/css seulement. Pour davantage d'informations, https://developers.google.com/web/tools/lighthouse/
- Porter attention au volet accessibilité, fournit dans les Audits de Lighthouse.
- Tester le volet web responsive (avec l'aide du simulateur Chrome, accessible dans les outils de Développeur Chrome) Rappel des largeurs d'écran en Bootstrap :

        Extra small devices Portrait phones (<544px)        
        Portrait phones (<544px)        
        Small devices Landscape phones (≥544px - <768px)
        Medium devices Tablets (≥768px - <992px)
        Large devices Desktops (≥992px - <1200px)
        Extra large devices Desktops (≥1200p

- Le HTML devrait etre validé (html5 avec https://html5.validator.nu/ par exemple).
- Le HTML devrait être sémantique (html5). 
