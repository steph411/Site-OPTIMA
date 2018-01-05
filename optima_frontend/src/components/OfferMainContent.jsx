import React from 'react';
import styled from 'styled-components';
import { Card, Divider } from 'semantic-ui-react';
import Offers from './Offers';

const UnstyledOfferMainContent = (props) => {
   return (
      <div className={props.className}>
         <Card>
            <Card.Content>
               <Card.Header>VIN CHAT PIOCHAUD ST EMILION 75CL</Card.Header>
               <Divider />
               <Card.Meta>4 offres : 11000 - 16000 FCFA</Card.Meta>
               <Card.Description>Vin rouge Vallée du Rhône</Card.Description>
            </Card.Content>
         </Card>
         <Offers />
      </div>
   );
};

const OfferMainContent = styled(UnstyledOfferMainContent)`
   {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(50px, auto);
   }
`;

export default OfferMainContent;
