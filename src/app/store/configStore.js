import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const configStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: devToolsEnhancer,
  });
};

export default configStore;
