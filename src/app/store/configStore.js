import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const configStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: composeWithDevTools(applyMiddleware(thunk)),
  });
};

export default configStore;
