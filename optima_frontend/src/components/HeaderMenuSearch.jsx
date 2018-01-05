import React, { Component } from 'react';
import { Input, Search, Container } from 'semantic-ui-react';
import styled from 'styled-components';

//  composant input de recherche basique(sans styles )

const search = (props) => {
   return (
      <Input
      className={props.className}
      massive
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
      /* margin: 0 auto; */
      position: absolute;
      left: 30%;
      right: 40%;
      top: 0px;
      bottom: 0px;
      /* transfrom: translate(-50%); */
   }
`;

// composant de recherche final qui aura le 'state' provenant du store redux
// le container est utilisé juste pour la présentation(donner de l'espace par rapport aux autres composants du menu)

class HeaderMenuSearch extends Component {
   constructor(props) {
      super(props);
      this.searchChange = this.searchChange.bind(this);
   }
   searchChange(e) {
      e.preventDefault;
      this.props.changeValue(e.target.value);
   }
   render() {
      return (
         <Container>
            <Search
            as={styledsearch}
            value={this.props.value}
            results={['beehg', 'jghjgjhg']}
            loading={this.props.loading}
            changeValue={this.props.changeValue}
            filterOptions={this.props.filterOptions}
            onSearchCange={this.props.searchChange}
            />
         </Container>
      );
   }
}


export default HeaderMenuSearch;
