import { combineReducers } from 'redux';
import TransactionsReducer from './reducer_transactions';
import CategoriesReducer from './reducer_categories';
import IndividualsReducer from './reducer_individuals';

const rootReducer = combineReducers({
  transactions: TransactionsReducer,
  categories: CategoriesReducer,
  individuals: IndividualsReducer
});

export default rootReducer;
