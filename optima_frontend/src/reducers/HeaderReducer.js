const headerReducer = (state = { visibility: false }, action) => {
   switch (action.type) {
      case 'CHANGE_VISIBILITY':
         return ({
            ...state,
            visibility: !state.visibility,
            });
      default:
         return state;
   }
};

export default headerReducer;

