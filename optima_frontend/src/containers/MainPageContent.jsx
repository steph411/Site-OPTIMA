import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PromotionSlider from '../components/PromotionSlider';
import { previousSlide, nextSlide } from '../actions/sliderActions';
import ProduitsFavoris from '../components/ProduitsFavoris';
import ProduitsRecherches from '../components/ProduitsRecherches';


class UnstyledMainPageContent extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className={this.props.className}>
            <PromotionSlider
            slideIndex={this.props.promotionSliderReducer.slideIndex}
            previousSlide={this.props.previousSlide}
            nextSlide={this.props.nextSlide}
            />
            <ProduitsFavoris />
            <ProduitsRecherches />
         </div>
      );
   }
}

const MainPageContent = styled(UnstyledMainPageContent)`
   &&&{
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(100px, auto );
      grid-gap: 40px;

   }
`;

const mapStateToProps = (state) => {
   return ({ promotionSliderReducer: state.promotionSliderReducer });
};

const mapDispatchToProps = (dispatch) => {
   return (bindActionCreators({ previousSlide, nextSlide }, dispatch));
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContent);

