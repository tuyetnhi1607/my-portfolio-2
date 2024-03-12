import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewWord } from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";
import { LANGUAGES_CODE } from "../../types/text-to-speech.types";
import { Speaker } from "./speaker";

export function InputAnswer({
  wordSelected,
  wordView,
}: {
  wordSelected: any;
  wordView: any;
}) {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();
  const { modeView } = useSelector((state: RootState) => state);
  const modeAnswer =
    modeView === LANGUAGES_CODE.JA ? LANGUAGES_CODE.EN : LANGUAGES_CODE.JA;
  const [nextWord, setNextWord] = React.useState(false);
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
      document.getElementById("answer")!.style.display = "flex";
      document.getElementById("inputAnswer")!.setAttribute("disabled", "true");
    }
  };

  const handleNext = () => {
    let newWord = wordSelected;
    newWord = {
      ...wordSelected,
      total: wordSelected.total + 1,
    };
    document.getElementById("answer")!.style.display = "none";
    dispatch(addNewWord(newWord));
    setInputValue("");
    document.getElementById("inputAnswer")!.removeAttribute("disabled");
    // focus input
    document.getElementById("inputAnswer")!.focus();
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
        id="inputAnswer"
        type="text"
        className="w-1/2 text-5xl text-center p-2 border-2 border-slate-400 rounded-xl focus:border-blue-600 outline-none "
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      {}
      <div id="answer" className="text-4xl font-bold text-red-500 hidden gap-4">
        <Speaker text={wordView.answer} mode={modeAnswer} />
        {wordView.answer}

        <button
          className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md text-lg font-medium hover:bg-blue-600"
          onClick={() => {
            setNextWord(true);
            handleNext();
          }}
        >
          Done
        </button>
      </div>
    </>
  );
}
