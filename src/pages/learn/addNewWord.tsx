import * as React from "react";
import { useDispatch } from "react-redux";
import { IWordOrSentence, addNewWord } from "../../redux/features/words/slices";
import { ETopic } from "../../types/topic.types";

export interface IAddNewWordProps {}

export function AddNewWord(props: IAddNewWordProps) {
  const [wordOrSentence, setWord] = React.useState<IWordOrSentence>({
    wordOrSentence: "",
    meaning: "",
    total: 0,
    right: 0,
    topic: ETopic.All,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!wordOrSentence.wordOrSentence || !wordOrSentence.meaning) return;
    dispatch(addNewWord(wordOrSentence));
    setWord({
      wordOrSentence: "",
      meaning: "",
      total: 0,
      right: 0,
      topic: ETopic.All,
    });
  };
  return (
    <div className="relative z-10 h-max bg-blue-100 p-3 rounded-md max-w-64 backdrop-filter backdrop-blur-lg ">
      <form
        className="flex gap-1 flex-col items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="wordOrSentence"
          className="p-2 border border-slate-200 rounded-md focus:border-blue-600 outline-none"
          onChange={(e) => setWord({ ...wordOrSentence, wordOrSentence: e.target.value })}
        />
        <input
          type="text"
          className="p-2 border border-slate-200 rounded-md focus:border-blue-600 outline-none"
          placeholder="meaning"
          onChange={(e) => setWord({ ...wordOrSentence, meaning: e.target.value })}
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
