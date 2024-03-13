import React, { useCallback } from "react";
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
  const [count, setCount] = React.useState(1);
  const { modeView } = useSelector((state: RootState) => state);
  const [status, setStatus] = React.useState<"right" | "wrong" | null>(null);
  const modeAnswer =
    modeView === LANGUAGES_CODE.JA ? LANGUAGES_CODE.EN : LANGUAGES_CODE.JA;
  const handleSubmit = useCallback(() => {
    let newWord = wordSelected;
    if (inputValue.toLowerCase() === wordView.answer.toLowerCase()) {
      setStatus("right");
      newWord = {
        ...wordSelected,
        right: wordSelected.right + 1,
        total: wordSelected.total + count,
      };
      dispatch(addNewWord(newWord));
      setInputValue("");
      setCount(1);
    } else {
      setStatus("wrong");
      dispatch(addNewWord(newWord));
      setCount((prev) => prev + 1);
    }
  }, [dispatch, inputValue, wordSelected, wordView, count]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      {" "}
      <input
        id="inputAnswer"
        type="text"
        className="w-full max-w-2xl text-5xl text-center p-2 border-2 border-slate-400 rounded-xl focus:border-blue-600 outline-none "
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      {status === "wrong" && (
        <div id="answer" className="text-4xl font-bold text-red-500 flex gap-4">
          <Speaker text={wordView.answer} mode={modeAnswer} />
          {wordView.answer}
        </div>
      )}
    </>
  );
}
