import React from 'react';
import { Advertisement } from 'semantic-ui-react';
import styled from 'styled-components';


const unstyledPubSpace = () => {
   return (
      <Advertisement unit="skyscraper" />
   );
};


const PubSpace = styled(unstyledPubSpace)`
   &&&{

   }
`;

export default PubSpace;

