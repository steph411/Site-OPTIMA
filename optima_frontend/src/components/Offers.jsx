import React from 'react';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';
import Offer from './Offer';

const magasins = [
   {
      nom: 'Santa Lucia',
      prix: 11000,
   },
   {
      nom: 'NIKKI',
      prix: 12000,
   },
   {
      nom: 'Cameroun Bebe',
      prix: 11500,
   },
   {
      nom: 'MAHIMA',
      prix: 16000,
   },
];

const UnstyledOffers = (props) => {
   return (
   <Segment inverted className={props.className}>
      {magasins.map(magasin => <Offer magasin={magasin} />)}
   </Segment>
   );
};

const Offers = styled(UnstyledOffers)`
   &&&{
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr;
      grid-auto-row: minmax(100px, Auto);
      background-color: #172a3a;
   }
`;

export default Offers;
