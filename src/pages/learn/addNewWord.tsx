import * as React from "react";
import { useDispatch } from "react-redux";
import { IWord, addNewWord } from "../../redux/features/words/slices";

export interface IAddNewWordProps {}

export function AddNewWord(props: IAddNewWordProps) {
  const [word, setWord] = React.useState<IWord>({
    word: "",
    reading: "",
    meaning: "",
    total: 0,
    right: 0,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNewWord(word));
  };
  return (
    <div className="bg-slate-200">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="word"
          onChange={(e) => setWord({ ...word, word: e.target.value })}
        />
        <input
          type="text"
          placeholder="reading"
          onChange={(e) => setWord({ ...word, reading: e.target.value })}
        />
        <input
          type="text"
          placeholder="meaning"
          onChange={(e) => setWord({ ...word, meaning: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
