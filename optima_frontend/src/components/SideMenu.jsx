import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { categories } from './HeaderHiddenMenu';

const UnstyledSideMenu = (props) => {
   return (
      <Menu vertical className={props.className}>
         <Menu.Item header>
            Categories
         </Menu.Item>
         {categories
            .map((categorie) => {
               const souscats = categorie.souscategories;
               return (
                  <Dropdown text={categorie.nom} pointing="left" className="link item" >
                     <Dropdown.Menu>
                        {souscats.map((souscategorie) => {
                           const { catalogues } = souscategorie;
                           return (
                           <Dropdown.Item>
                              <Dropdown text={souscategorie.nom} pointing="left" >
                                 <Dropdown.Menu>
                                    {catalogues.map(catalogue => <Dropdown.Item><Link to={`/${catalogue}`} >{catalogue}</Link></Dropdown.Item>)}
                                 </Dropdown.Menu>
                              </Dropdown>
                           </Dropdown.Item>);
                        })}
                     </Dropdown.Menu>
                  </Dropdown>
               );
            })}
      </Menu>
   );
};

const SideMenu = styled(UnstyledSideMenu)`
   &&&{
      z-index: 10;
      height: 440px;
      box-shadow: 3px 3px 3px rgba(0,0,0,0.4);
   }
`;

export default SideMenu;

