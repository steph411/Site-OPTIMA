import React, { Component } from 'react';
import styled from 'styled-components';


const Styledsvg = styled.svg`
   width: 70px;
   height: 50px;
   cursor: pointer;


   & path{
      stroke-width: 60;
      stroke-linecap: round;
      stroke: #fff;
      fill: none;
      transition: all .5s ease-in-out;
    
   &.top_bar,&.bottom_bar{
      stroke-dasharray: 240px 910px;
      &.open{
         stroke-dashoffset: -650px;
      }
   }


   &.middle_bar {
      stroke-dasharray: 240px 240px;
      &.open{
         stroke-dashoffset: -120px;
         stroke-dasharray: 0px 220px;
      }
   }
}

`;

class HamburgerIcon extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
   }

   handleClick(event) {
         event.preventDefault();
         const pathelements = event.currentTarget.getElementsByTagName('path');
         for (const pathelement of pathelements) {
            pathelement.classList.toggle('open');
         }
         this.props.changeHiddenMenuVisibility();
   }
   render() {
      return (
         <Styledsvg viewBox="0 0 800 600" onClick={this.handleClick} >
               <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top_bar" />

               <path d="M300,320 L540,320" className="middle_bar" />

               <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom_bar" transform="translate(480, 320) scale(1, -1) translate(-480, -318)" />
         </Styledsvg>
      );
   }
}

export default HamburgerIcon;
