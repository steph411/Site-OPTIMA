import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Loader, Dimmer, Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import ProduitRecherche from '../components/ProduitRecherche';

class UnstyledProduitsRecherches extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      if (this.props.cataloguesquery.loading) {
         console.log(this.props.cataloguesquery);
         return (

            <Loader>Loading</Loader>
         );
      }
      return (
         [
            <div className={this.props.className}>
               {this.props.cataloguesquery.allCatalogues.map(produit => <ProduitRecherche produit={produit.nom} />)}
            </div>,
         ]
      );
   }
}

const ProduitsRecherches = styled(UnstyledProduitsRecherches)`
   &&&{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(15px, auto);
      grid-gap: 5px;
      margin-top: 5px;
      backgroung-color: #fdfffc;
   }
`;

const ALL_CATALOGUES_QUERY = gql`
query allcataloguesquery{
   allCatalogues{
     nom
   }
 }
`;
export default graphql(ALL_CATALOGUES_QUERY, { name: 'cataloguesquery' })(ProduitsRecherches);

