import React from 'react';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';
import vin8 from '../images/produits/VIN CHAT PIOCHAUD ST EMILION 75CL.jpg';
import { MyImage } from './ProduitsFavoris';

const UnstyledOfferDescriptiveImage = (props) => {
   return (
      <Segment className={props.className}>
         <MyImage src={vin8} />
      </Segment>
   );
};


const OfferDescriptiveImage = styled(UnstyledOfferDescriptiveImage)`
   {
      height: 150px;
   }
`;

export default OfferDescriptiveImage;
