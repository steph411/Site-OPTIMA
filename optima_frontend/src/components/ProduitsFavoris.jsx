import React from 'react';
import styled from 'styled-components';
import { Card, Image, Divider, Header } from 'semantic-ui-react';
import sac from '../images/produitsfavoris/sac.jpg';
import cafetière from '../images/produitsfavoris/cafetière.jpg';
import velo from '../images/produitsfavoris/velo.jpg';
import tvled from '../images/produitsfavoris/tvled.jpg';
import portefeuille from '../images/produitsfavoris/portefeuille.jpg';

const produits = [
   {
      nom: 'sac',
      image: sac,
      prix: 5000,
   },
   {
      nom: 'cafetière',
      image: cafetière,
      prix: 15000,
   },
   {
      nom: 'velo',
      image: velo,
      prix: 25000,
   },
   {
      nom: 'tv LED',
      image: tvled,
      prix: 70000,
   },
   {
      nom: 'portefeuille',
      image: portefeuille,
      prix: 1000,
   },
];

export const Mydiv = styled.div`
   width: 100%;
   height: 100px; 
`;

export const MyImage = styled(Image)`
  &&&{
   height: auto;
   width:100%;
   object-fit: cover;
   max-height: 100%;
  } 
`;


const unstyledProduitsFavoris = (props) => {
   return (
      <div>
         <Header size="medium">Du shopping toute l'année.Dénichez les meilleures affaires et trouvez le meilleur prix grâce à Optima </Header>
         <Divider />
         <div className={props.className}>
            {
               produits.map((produit) => {
                  return (
                        <Card>
                           <Mydiv>
                              <MyImage src={produit.image} fluid height={130} />
                           </Mydiv>
                           <Card.Content>
                              <Card.Header>{produit.nom}</Card.Header>
                              <Card.Description>A partir de {produit.prix} FCFA</Card.Description>
                           </Card.Content>
                        </Card>
                  );
               })
            }
         </div>
         <Header as="h3">Les produits les plus recherchés</Header>
         <Divider />
      </div>
   );
};

const ProduitsFavoris = styled(unstyledProduitsFavoris)`
   &&&{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(200px, auto);
      grid-column-gap: 10px;
      grid-row-gap: 5px; 
      box-sizing: border-box;
      
   }
`;

export default ProduitsFavoris;

