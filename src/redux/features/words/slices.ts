import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { vocabularyAll } from "../../../constants/new-words";
import { LANGUAGES_CODE } from "../../../types/text-to-speech.types";
import { ETopic } from "../../../types/topic.types";

let data: IWordOrSentence[] = [...vocabularyAll];
export interface IWordOrSentence {
  hiragana: string;
  meaning: string; 
  kanji: string;
  total: number;
  right: number;
  topic: ETopic;
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
      const index = state.words.findIndex(
        (word) =>
          word.hiragana === action.payload.hiragana &&
          word.topic === action.payload.topic
      );
      if (index !== -1) {
        state.words[index] = {
          ...state.words[index],
          ...action.payload,
        };
      } else {
        state.words.push(action.payload);
      }
      state.words = _.orderBy(state.words, ["right", "total"], ["asc", "desc"]);
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
