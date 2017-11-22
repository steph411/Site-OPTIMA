import React from 'react';
import styled from 'styled-components';
import { Image, Segment } from 'semantic-ui-react';
import HiddenMenuItemHeader from './HiddenMenuItemHeader';


const menuitem = (props) => {
   return (
      <Segment className={props.className} >
         <Image width={60} height={60} src={`${props.img}`} />
         <div>
            <HiddenMenuItemHeader categorie={props.categorie} souscategories={props.souscategories} />
            <p>product,product,product</p>
         </div>
      </Segment>
   );
};

const HiddenMenuItem = styled(menuitem)`
   &&&{
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 75px;
      grid-gap: 5px;
      margin: 0px 0px;
      /* box-sizing: border-box; */
      
      
   }
`;

export default HiddenMenuItem;
