import { combineReducers } from '@reduxjs/toolkit';
import { detailProductReducer } from '@Neurogine/detail-product';

const rootReducer = combineReducers({
  detailProduct: detailProductReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;