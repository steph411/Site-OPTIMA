export const changeValue = (newvalue) => {
   return ({
      type: 'CHANGE_VALUE',
      payload: newvalue,
   });
};

export const provideResults = (results) => {
   return ({
      type: 'RESULTS_FETCHED',
      payload: results,
   });
};

export const fetchResults = () => {
   return ({
      type: 'FETCHING_RESULTS',
   });
};

export const filterOptions = (value) => {
   return ({
      type: 'FILTER_OPTIONS',
      payload: value,
   });
};
