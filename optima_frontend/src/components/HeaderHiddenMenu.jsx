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


const categories = [
   {
      nom: 'informatique',
      image: `${informatique}`,
      souscategories: [
         {
            nom: 'ordinateurs portables',
            icone: 'laptop',
         },
         {
            nom: 'ordinateurs de bureau',
            icone: 'desktop',
         },
         {
            nom: 'imprimantes et scanners',
            icone: 'print',
         },
         {
            nom: 'peripheriques et accessoires',
            icone: 'keyboard',
         },
         {
            nom: 'stockage',
            icone: 'usb',
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
         },
         {
            nom: 'chaussures homme',
            icone: 'man',
         },
         {
            nom: 'accessoires homme',
            icone: 'man',
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
         },
         {
            nom: 'chaussures femme',
            icone: 'woman',
         },
         {
            nom: 'accessoires femme',
            icone: 'woman',
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
         },
         {
            nom: 'accessoires téléphonie mobile',
            icone: 'headphone',
         },
         {
            nom: 'radiocommunication',
            icone: 'signal',
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
         },
         {
            nom: 'réfrigérateurs et congelateurs',
            icone: 'minus square',
         },
         {
            nom: 'petit électroménager',
            icone: 'bitbucket square',
         },
         {
            nom: 'climatisation',
            icone: 'sun',
         },
         {
            nom: 'cuisson',
            icone: 'fire',
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
         },
         {
            nom: 'maquillage',
            icone: 'paint brush',
         },
         {
            nom: 'cheuveux',
            icone: 'user circle outline',
         },
         {
            nom: 'parfums',
            icone: 'meh',
         },
         {
            nom: 'soins du corps et hygiène',
            icone: 'bath',
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
         },
         {
            nom: 'vetements enfants',
            icone: 'child',
         },
         {
            nom: 'jouets',
            icone: 'car',
         },
         {
            nom: 'produits divers pour bebe',
            icone: 'cart',
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
         },
         {
            nom: 'photo et video',
            icone: 'video camera',
         },
         {
            nom: 'audio',
            icone: 'music',
         },
         {
            nom: 'instruments et sonnorisation',
            icone: 'bell',
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
         },
         {
            nom: 'literie',
            icone: 'hotel',
         },
         {
            nom: 'eclairage',
            icone: 'lightbulb',
         },
         {
            nom: 'decoration',
            icone: 'home',
         },
         {
            nom: 'jardin',
            icone: 'new pied piper',
         },
         {
            nom: 'entretien maison',
            icone: 'home',
         },
         {
            nom: 'cave à vin',
            icone: 'bar',
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
         },
         {
            nom: 'lecture et fournitures',
            icone: 'book',
         },
         {
            nom: 'jeux videos',
            icone: 'game',
         },
      ],
   },
];

// creation du menu en fesant un parcours de la liste des categories pour creer pour chacune
// un menu item

const hiddenmenu = (props) => {
   return (
      <Segment attached="top" className={props.className}>
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
      /* z-index: 10; */
      background: #8e9eab;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      /* opacity: 0; */


   }
`;

export default HeaderHiddenMenu;
