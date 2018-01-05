import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
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
         <Container>
            <Menu inverted massive fixed="top" className={this.props.className}>
               <Menu.Item
               as={HamburgerIcon}
               changeHiddenMenuVisibility={this.props.changeHiddenMenuVisibility}
               />
               <Menu.Item
               as={HeaderMenuSearch}
               filterOptions={this.props.filterOptions}
               results={this.props.results}
               loading={this.props.loading}
               value={this.props.value}
               changeValue={this.props.changeValue}
               />
               <Menu.Menu position="right">
                  <Menu.Item header link name="Guides" />
                  <Menu.Item header link name="Contact" />
                  {/* <Menu.Item header link name="Partenaires" /> */}
                  <Menu.Item header link icon="user" onClick={this.handleUserIconClick} />
               </Menu.Menu>
            </Menu>
         </Container>
      );
   }
}


const HeaderMenu = styled(MyMenu)`
&&&&{
   background-color: #172a3a;
   border-radius: 0%;
   margin-bottom: 0px;
   position: fixed;
}
`;


export default HeaderMenu;

