import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IWord, addNewWord } from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";

export interface IMainProps {}

function getRandomObjectByLowestPercentage(objects: IWord[], unit: number) {
  const filteredWords = [...objects].filter((word) => {
    return unit === 0 || word.unit === unit;
  });
  let count = Math.floor(filteredWords.length / 2);

  const objectsWithLowestPercentage = filteredWords.filter((obj) => {
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
  const { words, unit, modeView } = useSelector((state: RootState) => state);
  const wordSelected: IWord = getRandomObjectByLowestPercentage(words, unit);
  const wordView = {
    ...wordSelected,
    view: modeView === "jp" ? wordSelected.word : wordSelected.meaning,
    answer: modeView === "jp" ? wordSelected.meaning : wordSelected.word,
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
            {percentage.toFixed(1)}% ({wordSelected.right}/{wordSelected.total})
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
    if (inputValue.toLowerCase() === wordView.answer.toLowerCase()) {
      newWord = {
        ...wordSelected,
        right: wordSelected.right + 1,
        total: wordSelected.total + 1,
      };
      dispatch(addNewWord(newWord));
      setInputValue("");
    } else {
      newWord = {
        ...wordSelected,
        total: wordSelected.total + 1,
      };
      // id ='answer' is used to display the answer
      document.getElementById("answer")!.style.display = "block";
      setTimeout(() => {
        document.getElementById("answer")!.style.display = "none";
        dispatch(addNewWord(newWord));
        setInputValue("");
      }, 3000);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <>
      {" "}
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
      <span id="answer" className="text-4xl font-bold text-red-500 hidden">
        {wordView.answer}
      </span>
    </>
  );
}
