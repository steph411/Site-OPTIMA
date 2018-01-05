import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import styled from 'styled-components';


const MySegment = styled(Segment)`
   &&&{
      
   }
`;

const EspaceMarchand = () => {
   return (
      <MySegment>
         <Header size="small">Espace Marchand</Header>
         <p>Marchands: referencez vos produits sur Optima</p><br />
         <a href="#">espace marchand</a>
      </MySegment>
   );
};

export default EspaceMarchand;
