import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import SideMenu from '../components/SideMenu';
import MainPageContent from './MainPageContent';
import EspaceMarchand from '../components/EspaceMarchand';
import PubSpace from '../components/PubSpace';
import Footer from '../components/Footer';
import ProductsGroupCards from '../components/ProductsGroupCards';
import AccordionFilter from '../components/AccordionFilter';
import DetailsOffres from '../components/DetailsOffres';


const Mybody = styled.div`
   {
      text-align: center;
   }
`;


class UnstyledMainPage extends Component {
   constructor(props) {
      super(props);
      /* this.handleSome = this.handleSome.bind(this); */
   }
   render() {
      return (
         <div>
            <Container className={this.props.className} textAlign="center" >
               <Switch>
                  <Route path="/" exact component={SideMenu} />
                  <Route path="/offres" component={SideMenu} />
                  <Route path="/vins" component={AccordionFilter} />
               </Switch>
               <Switch>
                  <Route path="/" exact component={MainPageContent} />
                  <Route path="/vins" component={ProductsGroupCards} />
                  <Route path="/offres" component={DetailsOffres} />
               </Switch>
               <div>
                  <EspaceMarchand />
                  <PubSpace />
               </div>
            </Container>
            <Footer />
         </div>
      );
   }
}

const MainPage = styled(UnstyledMainPage)`
   &&&&{
      display: grid;
      grid-template-columns: 1fr 4fr 1fr;
      margin-top: 60px;
      margin-left: auto;
      margin-right: auto;
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);
      & div{
         box-sizing: border-box;
      }
   }
`;

export default MainPage;
