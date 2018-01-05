import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import promotionSliderReducer from './promotionSliderReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
                                    headerReducer,
                                    promotionSliderReducer,
                                    searchReducer,
                                    });

export default rootReducer;
