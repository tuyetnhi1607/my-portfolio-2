import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { vocabularyAll } from "../../../constants/new-words";
import { ETopic } from "../../../types/topic.types";
import { LANGUAGES_CODE } from "../../../types/text-to-speech.types";

let data: IWordOrSentence[] = [...vocabularyAll];
export interface IWordOrSentence {
  wordOrSentence: string;
  meaning: string;
  total: number;
  right: number;
  topic: ETopic;
  kanji?: string;
  vn?: string;
}

export interface WordsState {
  words: IWordOrSentence[];
  topic: ETopic;
  modeView: LANGUAGES_CODE;
}

const initialState: WordsState = {
  words: data,
  topic: ETopic.All,
  modeView: LANGUAGES_CODE.JA,
};

export const WordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addNewWord: (state, action: PayloadAction<IWordOrSentence>) => {
      let tmp = state.words;
      let index = tmp.findIndex((wordOrSentence) => wordOrSentence.wordOrSentence === action.payload.wordOrSentence);
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
    filterTopic: (state, action: PayloadAction<ETopic>) => {
      state.topic = action.payload;
    },
    setModeView: (state, action: PayloadAction<LANGUAGES_CODE>) => {
      state.modeView = action.payload;
    },
  },
});

export const { addNewWord, filterTopic, setModeView } = WordsSlice.actions;

export default WordsSlice.reducer;
