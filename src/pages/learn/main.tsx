import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IWord, addNewWord } from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";

export interface IMainProps {}

function getRandomObjectByLowestPercentage(objects: IWord[]) {
  let count = Math.floor(objects.length / 2);
  const objectsWithLowestPercentage = objects.filter((obj) => {
    console.log(count);
    if (count < 0) return false;
    count--;
    const percentage = (obj.right / obj.total) * 100 || 0;
    return percentage < 100;
  });

  const randomIndex = Math.floor(
    Math.random() * objectsWithLowestPercentage.length
  );
  return objectsWithLowestPercentage[randomIndex];
}

export function Main(props: IMainProps) {
  const { words } = useSelector((state: RootState) => state);
  const wordSelected: IWord = getRandomObjectByLowestPercentage(words);
  const random = Math.random() > 0.5;
  const wordView = {
    ...wordSelected,
    view: random ? wordSelected.word : wordSelected.meaning,
    answer: random ? wordSelected.meaning : wordSelected.word,
  };
  const percentage = (wordSelected.right / wordSelected.total) * 100 || 0;
  const listColor = ["#35b8a6", "#fc8f58", "#399acb", "#c93eec", "#f30940"];
  const color = listColor[Math.floor(Math.random() * listColor.length)];
  return (
    <div className="font-noto-JP w-full h-full flex flex-col items-center justify-center gap-8">
      <div className={`w-1/2 flex items-center`}>
        <div
          className={`relative w-full min-h-[30vh] flex items-center justify-center `}
        >
          <div
            className="absolute top-0 left-0 w-full h-full opacity-20 rounded-lg"
            style={{
              backgroundColor: color,
            }}
          ></div>
          <span
            className="z-10 text-8xl font-bold text-center"
            style={{
              color: color,
            }}
          >
            {wordView.view}
          </span>
          <div className="absolute right-0 top-0 text-xl py-2 px-3 text-white font-bold">
            {percentage.toFixed(1)}%
          </div>
        </div>
      </div>
      <Input wordSelected={wordSelected} wordView={wordView} />
    </div>
  );
}

function Input({
  wordSelected,
  wordView,
}: {
  wordSelected: any;
  wordView: any;
}) {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    let newWord = wordSelected;
    if (inputValue === wordView.answer) {
      newWord = {
        ...wordSelected,
        right: wordSelected.right + 1,
        total: wordSelected.total + 1,
      };
    } else {
      newWord = {
        ...wordSelected,
        total: wordSelected.total + 1,
      };
    }
    dispatch(addNewWord(newWord));
    setInputValue("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <input
      type="text"
      className="w-1/2 text-5xl text-center p-2 border-2 border-slate-400 rounded-xl focus:border-blue-600 outline-none"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      onKeyDown={(e) => {
        handleKeyDown(e);
      }}
    />
  );
}
