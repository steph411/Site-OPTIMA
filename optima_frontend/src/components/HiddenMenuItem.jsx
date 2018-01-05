import React from 'react';
import styled from 'styled-components';
import { Image, Segment, List } from 'semantic-ui-react';
import HiddenMenuItemHeader from './HiddenMenuItemHeader';


const menuitem = (props) => {
   return (
      <Segment className={props.className} >
         <Image width={60} height={60} src={`${props.img}`} />
         <div>
            <HiddenMenuItemHeader categorie={props.categorie} souscategories={props.souscategories} /><br />
            <List link horizontal>
               <List.Item as="a">product</List.Item>
               <List.Item as="a">product</List.Item>
               <List.Item as="a">product</List.Item>
            </List>
         </div>
      </Segment>
   );
};

const HiddenMenuItem = styled(menuitem)`
   &&&{
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 75px;
      grid-gap: 3px;
      margin: 0px 0px;
      /* box-sizing: border-box; */
      
      
   }
`;

export default HiddenMenuItem;
