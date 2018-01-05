import React from 'react';
import styled from 'styled-components';
import OfferDescriptiveImage from './OfferDescriptiveImage';
import OfferMainContent from './OfferMainContent';

const UnstyledDetailsOffre = (props) => {
   return (
      <div className={props.className}>
         <OfferDescriptiveImage />
         <OfferMainContent />
      </div>
   );
};

const DetailsOffre = styled(UnstyledDetailsOffre)`
   {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 3fr;
   }
`;

export default DetailsOffre;
