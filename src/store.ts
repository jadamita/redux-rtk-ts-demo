import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from './slice/apiSlice';
import logger from 'redux-logger';

const middlewares = [logger, pokemonApi.middleware];

const rootReducer = combineReducers({
	[pokemonApi.reducerPath]: pokemonApi.reducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middlewares)
});

setupListeners(store.dispatch);
