import React from 'react';
import { Input, Search, Container } from 'semantic-ui-react';
import styled from 'styled-components';

//  composant input de recherche basique(sans styles )

const search = () => {
   return (
      <Input
      massive
      loading
      placeholder="chercher..."
      icon="search"
      iconPosition="left"
      action={
         {
            color: 'teal',
            labelPosition: 'right',
            content: 'chercher',
            icon: 'search',
         }
      }
      />
   );
};

// application des styles au composant basique

const styledsearch = styled(search)`
   &&&&{
      margin: 0 auto;
      width:100%;
   }
`;

// composant de recherche final qui aura le 'state' provenant du store redux
// le container est utilisé juste pour la présentation(donner de l'espace par rapport aux autres composants du menu)

const HeaderMenuSearch = () => {
   return (
      <Container>
         <Search as={styledsearch} />
      </Container>
   );
};

export default HeaderMenuSearch;
