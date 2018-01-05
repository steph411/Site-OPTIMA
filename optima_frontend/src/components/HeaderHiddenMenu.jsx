import React from 'react';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';
import HiddenMenuItem from './HiddenMenuItem';
import informatique from '../images/categories/informatique.svg';
import modehomme from '../images/categories/mode homme.svg';
import modefemme from '../images/categories/mode femme.svg';
import téléphonie from '../images/categories/téléphonie.svg';
import electroménager from '../images/categories/electroménager.svg';
import beauteetsante from '../images/categories/beaute et sante.svg';
import bebeetenfants from '../images/categories/bebe et enfants.svg';
import tvphotoetvideo from '../images/categories/tv photo et video.svg';
import maisonetjardin from '../images/categories/maison et jardin.svg';
import autres from '../images/categories/autres.svg';

// declaration de toutes les categories et de leurs images importées


export const categories = [
   {
      nom: 'informatique',
      image: `${informatique}`,
      souscategories: [
         {
            nom: 'ordinateurs portables',
            icone: 'laptop',
            catalogues: [
               'notebooks et ultrabooks',
            ],
         },
         {
            nom: 'ordinateurs de bureau',
            icone: 'desktop',
            catalogues: [
               'pc complets',
               'écrans',
               'unités centrales',
               'pièces et accessoires',
            ],
         },
         {
            nom: 'imprimantes et scanners',
            icone: 'print',
            catalogues: [
               'imprimantes',
               'cartouches',
               'scanners',
            ],
         },
         {
            nom: 'peripheriques et accessoires',
            icone: 'keyboard',
            catalogues: [
               'batteries et chargeurs',
               'souris et claviers',
               'accessoires réseau',
               'projecteurs',
               'webcams',
               'casques',
               'divers',
            ],
         },
         {
            nom: 'stockage',
            icone: 'usb',
            catalogues: [
               'disques durs',
               'clefs usb',
               'ram',
               'autres',
            ],
         },
      ],
   },
   {
      nom: 'mode homme',
      image: `${modehomme}`,
      souscategories: [
         {
            nom: 'vetements homme',
            icone: 'man',
            catalogues: [
               'polos',
               't-shirts',
               'chemises',
               'pull et gillets',
               'pantalons et chinos',
               'jeans',
               'vestes et manteaux',
               'sous vêtements',
               'attitude',
            ],
         },
         {
            nom: 'chaussures homme',
            icone: 'man',
            catalogues: [
               'chaussures de ville',
               'mocassins',
               'baskets',
               'sandales',
            ],
         },
         {
            nom: 'accessoires homme',
            icone: 'man',
            catalogues: [
               'montres et ceintures',
               'casquettes et chapeaux',
               'portefeuilles',
               'lunettes',
            ],
         },
      ],
   },
   {
      nom: 'mode femme',
      image: `${modefemme}`,
      souscategories: [
         {
            nom: 'vetements femme',
            icone: 'woman',
            catalogues: [
               'chemises',
               'tuniques',
               'pantalons',
               'shorts',
               'jupes',
               'vestes et manteaux',
               'chaussettes',
               'collants',
               'lingerie',
               'afritude',
            ],
         },
         {
            nom: 'chaussures femme',
            icone: 'woman',
            catalogues: [
               'ballerines',
               'pieds nu',
               'chaussures a talon',
               'escarpins',
               'baskets et sport femme',
            ],
         },
         {
            nom: 'accessoires femme',
            icone: 'woman',
            catalogues: [
               'sacs et pochettes',
               'montres',
               'ceintures',
               'bijoux',
            ],
         },
      ],
   },
   {
      nom: 'téléphonie',
      image: `${téléphonie}`,
      souscategories: [
         {
            nom: 'téléphones',
            icone: 'phone square',
            catalogues: [
               'smartphones',
               'telephones fixes',
               'tablettes',
            ],
         },
         {
            nom: 'accessoires téléphonie mobile',
            icone: 'headphone',
            catalogues: [
               'chargeurs',
               'protection',
               'ecouteurs',
               'batteries',
               'cartes mémoires',
               'powerbanks',
               'pochettes',
               'divers',
               'radio',
            ],
         },
         {
            nom: 'radiocommunication',
            icone: 'signal',
            catalogues: [
               'appareils de radiocommunications',
            ],
         },
      ],
   },
   {
      nom: 'electroménager',
      image: `${electroménager}`,
      souscategories: [
         {
            nom: 'lavage et séchage',
            icone: 'shopping basket',
            catalogues: [
               'laves linges',
               'sèche linges',
            ],
         },
         {
            nom: 'réfrigérateurs et congelateurs',
            icone: 'minus square',
            catalogues: [
               'refrigerateurs',
               'congélateurs',
            ],
         },
         {
            nom: 'petit électroménager',
            icone: 'bitbucket square',
            catalogues: [
               'robots et blenders',
               'boisson',
               'repassage',
               'autres',
            ],
         },
         {
            nom: 'climatisation',
            icone: 'sun',
            catalogues: [
               'ventilateurs',
               'climatiseurs',
               'chauffage',
               'traitement de l’air',
            ],
         },
         {
            nom: 'cuisson',
            icone: 'fire',
            catalogues: [
               'fours',
               'cuisinières',
               'plaques de cuisson',
            ],
         },
      ],
   },
   {
      nom: 'beaute et sante',
      image: `${beauteetsante}`,
      souscategories: [
         {
            nom: 'femme',
            icone: 'female',
            catalogues: [
               'soins du visage',
               'soins du corps',
               'épilation',
            ],
         },
         {
            nom: 'maquillage',
            icone: 'paint brush',
            catalogues: [
               'visage',
               'lèvres',
               'yeux',
               'accessoires',
            ],
         },
         {
            nom: 'cheuveux',
            icone: 'user circle outline',
            catalogues: [
               'mèches',
               'tissage',
               'sèche cheveux',
               'lisseurs',
               'tondeuses',
               'soins pour cheuveux',
            ],
         },
         {
            nom: 'parfums',
            icone: 'meh',
            catalogues: [
               'homme',
               'femme',
            ],
         },
         {
            nom: 'soins du corps et hygiène',
            icone: 'bath',
            catalogues: [
               'bains',
               'lotion et crèmes',
            ],
         },
      ],
   },
   {
      nom: 'bebe et enfants',
      image: `${bebeetenfants}`,
      souscategories: [
         {
            nom: 'vetements bebe',
            icone: 'child',
            catalogues: [
               'garcons',
               'filles',
            ],
         },
         {
            nom: 'vetements enfants',
            icone: 'child',
            catalogues: [
               'garcons',
               'filles',
            ],
         },
         {
            nom: 'jouets',
            icone: 'car',
            catalogues: [
               'vehicules',
               'poupées',
               'plain air',
               'pédagogie',
               'construction',
               'art et création',
            ],
         },
         {
            nom: 'produits divers pour bebe',
            icone: 'cart',
            catalogues: [
               'produits divers',
            ],
         },
      ],
   },
   {
      nom: 'tv photo et video',
      image: `${tvphotoetvideo}`,
      souscategories: [
         {
            nom: 'tv et home cinema',
            icone: 'tv',
            catalogues: [
               'télévisons',
               'home cinema',
               'lecteurs dvd et blëuray',
               'connectique et accessoires',
            ],
         },
         {
            nom: 'photo et video',
            icone: 'video camera',
            catalogues: [
               'appareils photo',
               'camescopes',
               'accessoires',
            ],
         },
         {
            nom: 'audio',
            icone: 'music',
            catalogues: [
               'iPods',
               'lecteurs mp3',
            ],
         },
         {
            nom: 'instruments et sonnorisation',
            icone: 'bell',
            catalogues: [
               'enceintes',
               'musique électronique',
               'karaoke',
               'accessoires',
            ],
         },
      ],
   },
   {
      nom: 'maison et jardin',
      image: `${maisonetjardin}`,
      souscategories: [
         {
            nom: 'cuisine',
            icone: 'food',
            catalogues: [
               'ustensiles et accessoires de cuisine',
               'conservation et rangements',
               'linges et accessoires de cuisine de table',
               'couteaux de cuisine',
               'art de la table',
            ],
         },
         {
            nom: 'literie',
            icone: 'hotel',
            catalogues: [
               'linge de lit',
               'couvertures et couettes',
               'accessoires de lit',
               'oreillers',
            ],
         },
         {
            nom: 'eclairage',
            icone: 'lightbulb',
            catalogues: [
               'plafonniers',
               'lampes',
               'abat-jours',
               'ampoules',
            ],
         },
         {
            nom: 'decoration',
            icone: 'home',
            catalogues: [
               'coussins et housses',
               'miroirs',
               'tapis et moquettes',
               'art mural',
               'rideaux',
               'stores',
               'horloges',
               'autres',
            ],
         },
         {
            nom: 'jardin',
            icone: 'new pied piper',
            catalogues: [
               'meubles d’extérieur',
               'decoration d’extérieur',
               'luminaires d’extérieur',
               'repas en extérieur',
               'pelouse et jardin',
               'tondeuses',
               'outillage d’extérieur',
            ],
         },
         {
            nom: 'entretien maison',
            icone: 'home',
            catalogues: [
               'produits nettoyants',
               'lessive',
               'détergents',
               'dépoussiérant',
               'détachant',
               'désinfectant',
            ],
         },
         {
            nom: 'cave à vin',
            icone: 'bar',
            catalogues: [
               'vins',
               'champagnes',
               'liqueurs',
               'boissons non alcoolisées',
            ],
         },
      ],
   },
   {
      nom: 'autres',
      image: `${autres}`,
      souscategories: [
         {
            nom: 'sport et outdoor',
            icone: 'bicycle',
            catalogues: [
               'accessoires sport',
               'fitness',
            ],
         },
         {
            nom: 'lecture et fournitures',
            icone: 'book',
            catalogues: [
               'livres',
               'magazines',
               'papeterie',
               'ecriture',
               'calculatrices',
               'fournitures scolaires',
            ],
         },
         {
            nom: 'jeux videos',
            icone: 'game',
            catalogues: [
               'consoles',
               'jeux',
               'accessoires',
            ],
         },
      ],
   },
];

// creation du menu en fesant un parcours de la liste des categories pour creer pour chacune
// un menu item

const hiddenmenu = (props) => {
   return (
      <Segment className={props.className}>
         { categories.map(categorie => <HiddenMenuItem key={categorie.nom} categorie={categorie.nom} souscategories={categorie.souscategories} img={categorie.image} />) }

      </Segment>
   );
};

// application des styles sur le hiddenmenu(creation de la grille...)

const HeaderHiddenMenu = styled(hiddenmenu)`
   &&&&{

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 90px;
      grid-gap: 5px;
      margin-top: 0px;
      margin-bottom: 0px;
      z-index: 20;
      background: #8e9eab;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      transition: all 350ms ease-in-out;
      transform: rotateY(${props => (props.visibility ? 0 : -45)}deg) translateY(${props => (props.visibility ? 0 : -100)}%);
      opacity: ${props => (props.visibility ? 1 : 0)};
      position: fixed;
      top: ${props => (props.visibility ? 50 : -300)}px;
      width: 100%;
      box-shadow: 0px 100px 100px 1000px rgba(0, 0, 0, 0.6);

   }
`;

export default HeaderHiddenMenu;
