import { createSlice } from "@reduxjs/toolkit";
import { read } from "../hooks/useSession";

const persistedState = read("_wordData");

const initialState: InitialStateInterface = persistedState || {
	previousWords: [],
	currentWord: "",
	guesses: ["     ", "     ", "     ", "     ", "     "],
	currentGuess: "",
	currentGuessNumber: 1,
};

const wordDataSlice = createSlice({
	name: "wordData",
	initialState,
	reducers: {
		setCurrentWord: (state, action) => {
			state.currentWord = action.payload;
		},
		addToPreviousWords: (state, action) => {
			state.previousWords.push(action.payload);
		},
		addToGuesses: (state, action) => {
			state.guesses[state.currentGuessNumber - 1] = action.payload;
		},
		clearGuesses: (state) => {
			state.guesses = ["     ", "     ", "     ", "     ", "     "];
		},
		setCurrentGuess: (state, action) => {
			const currentGuess = state.guesses[state.currentGuessNumber - 1];
			state.guesses[state.currentGuessNumber - 1] = currentGuess.replace(" ", action.payload);
		},
		removeFromCurrentGuess: (state) => {
			const currentGuess = state.guesses[state.currentGuessNumber - 1];
			const tempCurrentGuess = currentGuess.trim().split("");
			tempCurrentGuess.pop();
			while(tempCurrentGuess.length < 5){
				tempCurrentGuess.push(" ");
			}
			state.guesses[state.currentGuessNumber - 1] = tempCurrentGuess.join("");
		},
		goToNextGuess: (state) => {
			if (state.currentGuessNumber <= 5) {
				state.currentGuessNumber += 1;
			}
		},
		resetCurrentGuessNumber: (state) => {
			state.currentGuessNumber = 1;
		},
	}
});

interface InitialStateInterface {
	previousWords: string[];
	currentWord: string
	guesses: string[];
	currentGuess: string;
	currentGuessNumber: number;
}

export const actions = wordDataSlice.actions;
export default wordDataSlice.reducer;
