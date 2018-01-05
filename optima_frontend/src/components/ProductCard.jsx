import React from 'react';
import { Card, Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { Mydiv, MyImage } from './ProduitsFavoris';
import { Link } from 'react-router-dom';

const MyHeader = styled(Header)`
   &&&{
      color: orange;
   }
`;

const UnstyledProductCard = (props) => {
   return (
      <Card>
         <Mydiv>
            <MyImage size="small" height={150} src={props.produit.image} />
         </Mydiv>
         <Card.Content>
            <Card.Header>{props.produit.nom}</Card.Header>
            <Card.Meta>Consulter le site du marchand</Card.Meta>
            <Card.Description><MyHeader>{props.produit.zoneprix}FCFA</MyHeader></Card.Description>
         </Card.Content>
         <Card.Content extra>
            <a href="#">
               <Icon name="user" />
               <Link to="/offres">4 offres</Link>
            </a>
         </Card.Content>
      </Card>
   );
};

const ProductCard = styled(UnstyledProductCard)`
   &&&{

   }
`;

export default ProductCard;
