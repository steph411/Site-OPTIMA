import React from 'react';
import { Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const UnstyledProduitRecherche = (props) => {
   return (
         <div className={props.className}>
            <Header as="h4">{props.produit}</Header>
         </div>
   );
};

const ProduitRecherche = styled(UnstyledProduitRecherche)`
   &&&{
      margin: auto;
      text-align: center;
      cursor:pointer;
      backgroung-color: #fdfffc;
      border-bottom: 2px solid rgba(0,0,0, 0.5);
      & :hover{
         color: #30638e;
      }
   }
`;

export default ProduitRecherche;
