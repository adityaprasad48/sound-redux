import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer from 'reducers/rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware: any) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = (): any => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
