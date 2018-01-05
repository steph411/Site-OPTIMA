import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const Mydiv = styled.div`
   &&&&{
      text-align: center;
      color: white;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
   }
`;

const UnstyledFooter = (props) => {
   return (
      <div className={props.className}>
         <Mydiv>
            <Header as="h2" inverted>Utilisez le comparateur de prix Optima sur votre smartphone</Header>
         </Mydiv>
         <Mydiv>
            <a href="#"><img size="small" src="//cdn.idealo.com/ipc/964092/rwd/img/logo-appstore.png" alt="appstore" /></a>
            <a href="#"><img size="small" src="//cdn.idealo.com/ipc/964092/rwd/img/logo-playstore.png" alt="playstore" /></a>
         </Mydiv>
         <Mydiv>
            <Header as="h4" inverted>Protection des données - mentions légales/conditions générales</Header><br />
            <Header as="h4" inverted>* Les prix sont indiqués FCFA TTC, éventuels frais de port non inclus. Les prix, le classement des offres, les délais/frais de livraison sont susceptibles d’avoir évolué entre-temps. </Header>
         </Mydiv>
      </div>
   );
};

const Footer = styled(UnstyledFooter)`
   &&&{
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(30px, auto);
      width: 100%;
      height:300px;
      background-color:#172a3a;
      margin-top: 30px;

   }
`;


export default Footer;
