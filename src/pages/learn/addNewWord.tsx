import * as React from "react";
import { useDispatch } from "react-redux";
import { IWord, addNewWord } from "../../redux/features/words/slices";
import { ETopic } from "../../types/topic.types";

export interface IAddNewWordProps {}

export function AddNewWord(props: IAddNewWordProps) {
  const [word, setWord] = React.useState<IWord>({
    word: "",
    meaning: "",
    total: 0,
    right: 0,
    topic: ETopic.All,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!word.word || !word.meaning) return;
    dispatch(addNewWord(word));
    setWord({
      word: "",
      meaning: "",
      total: 0,
      right: 0,
      topic: ETopic.All,
    });
  };
  return (
    <div className="h-max bg-blue-100 p-3 rounded-md max-w-64">
      <form
        className="flex gap-1 flex-col items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="word"
          className="p-2 border border-slate-200 rounded-md focus:border-blue-600 outline-none"
          onChange={(e) => setWord({ ...word, word: e.target.value })}
        />
        <input
          type="text"
          className="p-2 border border-slate-200 rounded-md focus:border-blue-600 outline-none"
          placeholder="meaning"
          onChange={(e) => setWord({ ...word, meaning: e.target.value })}
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
