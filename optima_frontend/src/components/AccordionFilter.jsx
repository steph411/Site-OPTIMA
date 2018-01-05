import React, { Component } from 'react';
import { Form, Accordion, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const ClassificationForm = (
   <Form>
     <Form.Group grouped>
       <Form.Checkbox label="A.O.C" name="color" value="A.O.C" />
       <Form.Checkbox label="A.O.P" name="color" value="A.O.P" />
       <Form.Checkbox label="D.O.C.G" name="color" value="D.O.C.G" />
       <Form.Checkbox label="IGT" name="color" value="IGT" />
       <Form.Checkbox label="vin de pays" name="color" value="vin de pays" />
       <Form.Checkbox label="vin de table" name="color" value="vin de table" />
     </Form.Group>
   </Form>
 );

 const CepagerougeForm = (
   <Form>
     <Form.Group grouped>
       <Form.Checkbox label="Bobal" name="color" value="Bobal" />
       <Form.Checkbox label="Cabernet franc" name="color" value="Cabernet franc" />
       <Form.Checkbox label="Cabernet sauvignon" name="color" value="Cabernet sauvignon" />
       <Form.Checkbox label="cardinal" name="color" value="cardinal" />
       <Form.Checkbox label="carignan" name="color" value="carignan" />
       <Form.Checkbox label="dornfelder" name="color" value="dornfelder" />
     </Form.Group>
   </Form>
 );

 const GoutForm = (
   <Form>
     <Form.Group grouped>
       <Form.Checkbox label="demi" name="color" value="demi" />
       <Form.Checkbox label="sec" name="color" value="sec" />
       <Form.Checkbox label="moelleux" name="color" value="moelleux" />
       <Form.Checkbox label="sucre" name="color" value="sucre" />
     </Form.Group>
   </Form>
 );


 const MillesimeForm = (
   <Form>
     <Form.Group grouped>
       <Form.Checkbox label="1953" name="color" value="Bobal" />
       <Form.Checkbox label="1954" name="color" value="Cabernet franc" />
       <Form.Checkbox label="1955" name="color" value="Cabernet sauvignon" />
       <Form.Checkbox label="1956" name="color" value="cardinal" />
       <Form.Checkbox label="1957" name="color" value="carignan" />
       <Form.Checkbox label="1958" name="color" value="dornfelder" />
       <Form.Checkbox label="1959" name="color" value="Bobal" />
       <Form.Checkbox label="1960" name="color" value="Cabernet franc" />
       <Form.Checkbox label="1961" name="color" value="Cabernet sauvignon" />
       <Form.Checkbox label="1962" name="color" value="cardinal" />
       <Form.Checkbox label="1963" name="color" value="carignan" />
       <Form.Checkbox label="1964" name="color" value="dornfelder" />
     </Form.Group>
   </Form>
 );


 class UnstyledAccordionFilter extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.handleClick = this.handleClick.bind(this);
    }

   handleClick(e, titleProps) {
     const { index } = titleProps;
     const { activeIndex } = this.state;
     const newIndex = activeIndex === index ? -1 : index;

     this.setState({ activeIndex: newIndex });
   }

   render() {
     const { activeIndex } = this.state;

     return (
       <Accordion as={Menu} vertical className={this.props.className}>
         <Menu.Item>
           <Accordion.Title
             active={activeIndex === 0}
             content="Classification"
             index={0}
             onClick={this.handleClick}
           />
           <Accordion.Content active={activeIndex === 0} content={ClassificationForm} />
         </Menu.Item>

         <Menu.Item>
           <Accordion.Title
             active={activeIndex === 1}
             content="Cepage rouge"
             index={1}
             onClick={this.handleClick}
           />
           <Accordion.Content active={activeIndex === 1} content={CepagerougeForm} />
         </Menu.Item>
         <Menu.Item>
           <Accordion.Title
             active={activeIndex === 1}
             content="gout"
             index={1}
             onClick={this.handleClick}
           />
           <Accordion.Content active={activeIndex === 1} content={GoutForm} />
         </Menu.Item>
         <Menu.Item>
           <Accordion.Title
             active={activeIndex === 1}
             content="Millesime"
             index={1}
             onClick={this.handleClick}
           />
           <Accordion.Content active={activeIndex === 1} content={MillesimeForm} />
         </Menu.Item>
       </Accordion>
     );
   }
 }

 const AccordionFilter = styled(UnstyledAccordionFilter)`
   &&&{
      height: 715px;
      box-sizing: border-box;
   }
 `;

 export default AccordionFilter;
