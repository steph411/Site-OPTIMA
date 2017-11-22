import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import HamburgerIcon from './HamburgerIcon';
import HeaderMenuSearch from './HeaderMenuSearch';


class MyMenu extends Component {
   constructor(props) {
      super(props);
      this.handleUserIconClick = this.handleUserIconClick.bind(this);
   }

   handleUserIconClick() {
   }

   render() {
      return (
         <Menu inverted massive className={this.props.className}>
            <Menu.Item
            as={HamburgerIcon}
            />
            <Menu.Item
            as={HeaderMenuSearch}
            />
            <Menu.Menu position="right">
               <Menu.Item header link name="Guides" />
               <Menu.Item header link name="Contact" />
               <Menu.Item header link icon="user" onClick={this.handleUserIconClick} />
            </Menu.Menu>
         </Menu>
      );
   }
}


const HeaderMenu = styled(MyMenu)`
&&&&{
   background-color: #172a3a;
   border-radius: 0%;
   margin-bottom: 0px;
   /* background: #0f0c29;  /* fallback for old browsers */
   /* background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
   /* background: linear-gradient(to right, #24243e, #302b63, #0f0c29); */ */ /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 
}
`;


export default HeaderMenu;

