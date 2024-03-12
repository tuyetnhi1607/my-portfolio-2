import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  newWordsUnit1,
  newWordsUnit2,
  newWordsUnit3,
  newWordsUnit4,
} from "../../../constants/new-words";

let data: IWord[] = [
  ...newWordsUnit1,
  ...newWordsUnit2,
  ...newWordsUnit3,
  ...newWordsUnit4,
];

export interface IWord {
  word: string;
  meaning: string;
  total: number;
  right: number;
  unit: number;
}
export interface WordsState {
  words: IWord[];
  unit: number;
  modeView: "jp" | "en";
}

const initialState: WordsState = {
  words: data,
  unit: 0,
  modeView: "en",
};

export const WordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addNewWord: (state, action: PayloadAction<IWord>) => {
      let tmp = state.words;
      let index = tmp.findIndex((word) => word.word === action.payload.word);
      if (index !== -1) {
        tmp[index] = action.payload;
      } else {
        tmp = [action.payload, ...tmp];
      }
      tmp.sort((a, b) => {
        return a.right / a.total - b.right / b.total;
      });
      state.words = tmp;
    },
    filterUnit: (state, action: PayloadAction<number>) => {
      state.unit = action.payload;
    },
    setModeView: (state, action: PayloadAction<"jp" | "en">) => {
      state.modeView = action.payload;
    },
  },
});

export const { addNewWord, filterUnit, setModeView } = WordsSlice.actions;

export default WordsSlice.reducer;
