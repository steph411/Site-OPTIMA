import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import vin1 from '../images/produits/VIN  AUDELLE CAB SAUV RGE 75CL.jpg';
import vin2 from '../images/produits/VIN AIR DE PRINTEMPS MERLOT MOELLEUX 75CL.jpg';
import vin3 from '../images/produits/VIN MOUSSEUX LA COUR DIVINE 1_2 SEC 750ML.jpg';
import vin4 from '../images/produits/VIN CABERNET SAUV CASTEL 75 CL.jpg';
import vin5 from '../images/produits/VIN CASANOVA MALETTE 3*75CL.jpg';
import vin6 from '../images/produits/VIN CHAT DES TUILERIES BORD SUP 2012 75CL.jpg';
import vin7 from '../images/produits/VIN CHAT HAUT BRISEY MEDOC 75CL.jpg';
import vin8 from '../images/produits/VIN CHAT PIOCHAUD ST EMILION 75CL.jpg';
import vin9 from '../images/produits/VIN CHAT TOUZET BORD SUP 75 CL.jpg';
import vin10 from '../images/produits/VIN CHAT TROIS MOULINS HAUT MEDOC 75CL.jpg';
import vin11 from '../images/produits/VIN DOMAINE DU FOSSE ROUGE 75CL.jpg';
import vin12 from '../images/produits/VIN JACOBS CREEK SEMILLON 75CL.jpg';
import vin13 from '../images/produits/VIN LE CHEVALIER DE CAILLOU 750ML.jpg';
import ProductCard from './ProductCard';


const products = [
   {
      nom: 'VIN CABERNET SAUV CASTEL 04 75CL',
      image: vin1,
      zoneprix: '3400-4000',
   },
   {
      nom: 'VIN AIR DE PRINTEMPS MERLOT MOELLEUX 75CL',
      image: vin2,
      zoneprix: '3500-4200',
   },
   {
      nom: 'VIN BLANC CUVEE ATHALESIE BDX 75CL',
      image: vin3,
      zoneprix: '4700-5100',
   },
   {
      nom: 'VIN CABERNET SAUV CASTEL 75 CL',
      image: vin4,
      zoneprix: '5300-6000',
   },
   {
      nom: 'VIN CASANOVA MALETTE 3*75CL',
      image: vin5,
      zoneprix: '5200-6500',
   },
   {
      nom: 'VIN CHAT DES TUILERIES BORD SUP 2012 75CL',
      image: vin6,
      zoneprix: '4200-5500',
   },
   {
      nom: 'VIN CHAT HAUT BRISEY MEDOC 75CL',
      image: vin7,
      zoneprix: '10000-15000',
   },
   {
      nom: 'VIN CHAT PIOCHAUD ST EMILION 75CL',
      image: vin8,
      zoneprix: '11000-16000',
   },
   {
      nom: 'VIN CHAT TOUZET BORD SUP 75 CL',
      image: vin9,
      zoneprix: '4400-5100',
   },
   {
      nom: 'VIN CHAT TROIS MOULINS HAUT MEDOC 75CL',
      image: vin10,
      zoneprix: '10500-12000',
   },
   {
      nom: 'VIN DOMAINE DU FOSSE ROUGE 75CL',
      image: vin11,
      zoneprix: '2000-2500',
   },
   {
      nom: 'VIN JACOBS CREEK SEMILLON 75CL',
      image: vin12,
      zoneprix: '3950-4600',
   },
   {
      nom: 'VIN LE CHEVALIER DE CAILLOU 750ML',
      image: vin12,
      zoneprix: '2000-2700',
   },

];

const UnstyledProductsGroupCards = (props) => {
   return (
      <Card.Group itemsPerRow={3}>
         {products.map(produit => <ProductCard produit={produit} />)}
      </Card.Group>
   );
};

const ProductsGroupCards = styled(UnstyledProductsGroupCards)`
   &&&{

   }
`;

export default ProductsGroupCards;

