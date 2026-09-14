import { combineReducers } from '@reduxjs/toolkit';
import { detailProductReducer } from '@Neurogine/detail-product';
import { catalogProductReducer } from '@Neurogine/catalog-product';

const rootReducer = combineReducers({
    detailProduct: detailProductReducer,
    catalogProduct: catalogProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;