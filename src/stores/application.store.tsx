import { configureStore } from "@reduxjs/toolkit";
import wordDataReducer from "../features/wordData";
import { write } from "../hooks/useSession";
export const store = configureStore({
	reducer: {
		wordData: wordDataReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

store.subscribe(() => {
	const { wordData } = store.getState();
	write("_wordData", wordData);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
