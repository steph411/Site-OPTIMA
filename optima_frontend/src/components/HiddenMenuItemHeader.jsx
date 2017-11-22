import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';


const hiddenmenuitemheader = (props) => {
   return (
      <Dropdown inline text={props.categorie} icon="dropdown" className={props.className} >
         <Dropdown.Menu scrolling>
            {props.souscategories.map(souscategorie => <Dropdown.Item key={souscategorie.nom} icon={`${souscategorie.icone}`} text={souscategorie.nom} />)}
         </Dropdown.Menu>
      </Dropdown>
   );
};


const HiddenMenuItemHeader = styled(hiddenmenuitemheader)`
   &&&&{
      
   }
`;

export default HiddenMenuItemHeader;
