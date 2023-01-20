import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../../features/sandbox/testReducer';

const configStore = () => {
  return configureStore({
    reducer: testReducer,
  });
};

export default configStore;
