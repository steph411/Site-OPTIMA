import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Image } from 'semantic-ui-react';
import imagepromo1 from '../images/promos/promo1.jpeg';
import imagepromo2 from '../images/promos/promo2.jpeg';
import imagepromo3 from '../images/promos/promo3.jpeg';
import imagepromo4 from '../images/promos/promo4.jpeg';
import imagepromo5 from '../images/promos/promo5.jpeg';
import imagepromo6 from '../images/promos/promo6.jpeg';
import imagepromo7 from '../images/promos/promo7.jpeg';
import imagepromo8 from '../images/promos/promo8.jpeg';
import imagepromo9 from '../images/promos/promo9.jpeg';

const numerospromos = [
   imagepromo1,
   imagepromo2,
   imagepromo3,
   imagepromo4,
   imagepromo5,
   imagepromo6,
   imagepromo7,
   imagepromo8,
   imagepromo9,
];

const globalarrowstyles = `
   cursor: pointer;
   position: absolute;
   top: 50%;
   width: auto;
   margin-top: -22px;
   padding: 16px;
   color: white;
   font-weight: bold;
   font-size: 18px;
   transition: 200ms ease-in-out;
   border-radius: 0 3px 3px 0;
   background-color: rgba(0,0,0,0.4);
`;


const fade = keyframes`
   from{opacity: 0.4}
   to{opacity: 1}
`;

const PromotionContent = styled.div`
   &&&{
      display: none;
      padding: 0px 0px;
      /* box-sizing: border-box; */
      animation: ${fade} 1.5s ease-in-out;
   }
`;

const PrevArrow = styled.div`
   &&&{
      ${globalarrowstyles}     
      &:hover{
         background-color: rgba(0,0,0,0.8);
      }

   }
`;

const NextArrow = styled.div`
   &&&{
      ${globalarrowstyles}
      right: 0;
      border-radius: 3px 0 0 3px;
      &:hover{
         background-color: rgba(0,0,0,0.8);
      }
      
   }
`;

const MyImage = styled(Image)`
   &&&{
      object-fit: fill;
      width: 100%;
      height: 350px;
      max-width: 100%;
      max-height: 100%;
      box-sizing: border-box;

   }
`;

const MyDiv = styled.div`
   &&&{
      height: 25px;
      background-color: #000;
      opacity: 0.7;
      text-align: center;
      margin-top: 0px;
      padding: 0px;
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: -26px;
      border: 0px;
   }
`;

const MySpan = styled.span`
   &&&{
      cursor:pointer;
      height: 11px;
      width: 11px;
      margin: auto 3px;
      background-color: white /* #f3a712 */;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease-in-out;


   }
`;


class UnstyledPromotionSlider extends Component {
   constructor(props) {
      super();
      this.plusSlides = this.plusSlides.bind(this);
      this.minusSlides = this.minusSlides.bind(this);
      this.showSlides = this.showSlides.bind(this);
      this.currentSlide = this.currentSlide.bind(this);
   }
   componentDidMount() {
      setTimeout(this.showSlides(this.props.slideIndex), 2000);
   }
   showSlides(p) {
      let n = p;
      let i;
      const slides = document.getElementsByClassName('slides');
      const dots = document.getElementsByClassName('dots');
      if (n > slides.length - 1) { n = 0; }
      if (n < 0) { n = slides.length - 1; }
      for (i = 0; i < slides.length; i += 1) {
          slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i += 1) {
          dots[i].className = dots[i].className.replace('actif', '');
      }
      slides[n].style.display = 'block';
      /* dots[i].className = dots[i].className.replace('', 'actif'); */
   }

   plusSlides() {
      this.props.nextSlide();
      this.showSlides(this.props.slideIndex);
   }
   minusSlides() {
      this.props.previousSlide();
      this.showSlides(this.props.slideIndex);
   }
   currentSlide(event) {
      event.preventDefault();
      const numero = event.currentTarget.id;
      console.log(numero);
      this.showSlides(numero);
   }
   render() {
      return (
         <div key="actual slider" className={this.props.className} >
            {numerospromos.map((numero) => {
                  return (
                     <PromotionContent key={numero} className="slides ui segment">
                        <MyImage alt="promotion" as="img" src={numero} height="300" />
                     </PromotionContent>
                  );
               })
            }
            <PrevArrow onClick={this.minusSlides}>&#10094;</PrevArrow>
            <NextArrow onClick={this.plusSlides}>&#10095;</NextArrow>
            <MyDiv key="buttons holder">
            {
               numerospromos.map((elt, numero) => <MySpan active={false} className="dots" key={elt} id={numero} onClick={this.currentSlide} />)
            }
            </MyDiv>
         </div>
      );
   }
}

const PromotionSlider = styled(UnstyledPromotionSlider)`
   &&&{
      height: 350px;
      position: relative;
      box-sizing: border-box;


   }
`;

export default PromotionSlider;

