import { combineReducers } from '@reduxjs/toolkit';

import { catalogProductReducer } from '@Neurogine/catalog-product';
import { detailProductReducer } from '@Neurogine/detail-product';

const rootReducer = combineReducers({
  detailProduct: detailProductReducer,
  catalogProduct: catalogProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;