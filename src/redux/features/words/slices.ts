import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

let data: IWord[] = [
  {
    word: "かさ",
    reading: "kasa",
    meaning: "umbrella",
    total: 0,
    right: 0,
  },
  {
    word: "くつ",
    reading: "kutsu",
    total: 0,
    right: 0,
    meaning: "shoes",
  },
  {
    word: "ぼうし",
    reading: "boushi",
    total: 0,
    right: 0,
    meaning: "hat",
  },
  {
    word: "てがみ",
    reading: "tegami",
    total: 0,
    right: 0,
    meaning: "letter",
  },
  {
    word: "とけい",
    reading: "tokei",
    total: 0,
    right: 0,
    meaning: "watch",
  },
  {
    word: "ほん",
    reading: "hon",
    total: 0,
    right: 0,
    meaning: "book",
  },
  {
    word: "ほんだな",
    reading: "hondana",
    total: 0,
    right: 0,
    meaning: "bookshelf",
  },
  {
    word: "ほんだな",
    reading: "hondana",
    total: 0,
    right: 0,
    meaning: "bookshelf",
  },
  {
    word: "ほんだな",
    reading: "hondana",
    total: 0,
    right: 0,
    meaning: "bookshelf",
  },
];

export interface IWord {
  word: string;
  reading: string;
  meaning: string;
  total: number;
  right: number;
}
export interface WordsState {
  words: IWord[];
}

const initialState: WordsState = {
  words: data,
};

export const WordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addNewWord: (state, action: PayloadAction<IWord>) => {
      state.words.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewWord } = WordsSlice.actions;

export default WordsSlice.reducer;
