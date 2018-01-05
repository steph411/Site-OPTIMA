import React from 'react';
import styled from 'styled-components';
import { Rating, Segment, Header } from 'semantic-ui-react';

const MyHeader = styled(Header)`
   &&&{
      color: green;
   }
`;

const UnstyledOffer = (props) => {
   return (
   <Segment className={props.className}>
      <p><Header as="h4">vin chat piochaud saint emillion</Header></p>
      <p><Header>{props.magasin.prix}</Header> FCFA</p>
      <p>Moyens de paiement</p>
      <div>
         <MyHeader>{props.magasin.nom}</MyHeader> <br />
         <Rating icon="star" defaultRating={2} maxRating={5} clearable />
      </div>
   </Segment>
   );
};


const Offer = styled(UnstyledOffer)`
   {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
   }
`;

export default Offer;
