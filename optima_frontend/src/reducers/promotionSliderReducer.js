// on ne connait pas encore les actions de notre reducer donc on le laisse d'abord

const promotionSliderReducer = (state = { slideIndex: 1 }, action) => {
   const newstate = { ...state };
   let { slideIndex } = state;
   switch (action.type) {
      case 'NEXT_SLIDE':
         return (
            {
               ...newstate,
                slideIndex: slideIndex += 1,
            }
         );
      case 'PREVIOUS_SLIDE':
         return (
            {
               ...newstate,
               slideIndex: slideIndex -= 1,
            }
         );
      default:
         return newstate;
   }
};

export default promotionSliderReducer;
