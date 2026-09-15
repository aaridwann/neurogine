import { combineReducers } from '@reduxjs/toolkit';

import { catalogProductReducer } from '@Neurogine/catalog-product';
import { detailProductReducer } from '@Neurogine/detail-product';
import { snackbarReducer } from '@Neurogine/root';

const rootReducer = combineReducers({
  detailProduct: detailProductReducer,
  catalogProduct: catalogProductReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;