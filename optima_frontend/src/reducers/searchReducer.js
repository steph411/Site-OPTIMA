const defaultstate = {
   loading: false,
   value: '',
   results: [],
   options: [
      'pc',
      'ecrans',
      'unités centrales',
      'polos',
      'webcams',
      'smartphones',
      'chemises',
      'jeans',
      'montres',
      'ceintures',
   ],
};

const searchReducer = (state = defaultstate, action) => {
   switch (action.type) {
      case 'FETCHING_RESULTS':
         return (
            {
               ...state,
               loading: true,
            }
         );
      case 'RESULTS_FETCHED':
         return (
            {
               ...state,
               results: action.payload,
               loading: false,
            }
         );
      case 'CHANGE_VALUE':
         return (
            {
               ...state,
               loading: true,
               value: action.payload,
            }
         );
      case 'FILTER_OPTIONS':
         return ({
            ...state,
            results: state.options.filter(option => option.indexOf(action.payload) >= 0),
         });
      default:
      return state;
   }
};

export default searchReducer;
