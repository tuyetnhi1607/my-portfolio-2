import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Eye } from "../../components/icons";
import { IWordOrSentence } from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";
import { LANGUAGES_CODE } from "../../types/text-to-speech.types";
import { InputAnswer } from "./inputAnswer";
import { CustomTTSComponent } from "./tts";

export interface IMainProps {
  wordSelected: IWordOrSentence;
}

export function Main({ wordSelected }: IMainProps) {
  const [hidden, setHidden] = useState(false);
  const { modeView } = useSelector((state: RootState) => state);

  const wordView = {
    ...wordSelected,
    view:
      modeView === LANGUAGES_CODE.JA
        ? wordSelected?.wordOrSentence
        : wordSelected?.meaning,
    answer:
      modeView === LANGUAGES_CODE.JA
        ? wordSelected?.meaning
        : wordSelected?.wordOrSentence,
  };
  const percentage = (wordSelected.right / wordSelected.total) * 100 || 0;
  const listColor = ["#35b8a6", "#fc8f58", "#399acb", "#c93eec", "#f30940"];
  const color = listColor[Math.floor(Math.random() * listColor.length)];
  return (
    <>
      {wordSelected.kanji && (
        <div className="absolute z-0 flex flex-wrap items-center justify-center top-0 left-0 w-screen h-screen font-bold text-black opacity-5 overflow-hidden">
          {Array.from({ length: 200 }, (_, i) => i + 1).map((i) => (
            <div key={i} className="text-[100px]">
              {wordSelected.kanji}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 font-noto-JP flex-1 h-full min-w-96 flex flex-col items-center justify-center gap-8">
        <div
          className={`w-full max-w-2xl min-w-xl flex items-center backdrop-filter backdrop-blur-lg `}
        >
          <div
            className={`relative w-full min-h-[30vh] flex items-center justify-center p-6`}
          >
            <div
              className="absolute top-0 left-0 w-full h-full opacity-20 rounded-lg"
              style={{
                backgroundColor: color,
              }}
            ></div>
            <CustomTTSComponent
              lang={modeView}
              classNameIcon="absolute right-3 bottom-3"
              className=""
              key={wordView.view + wordView.total}
            >
              <div
                className="z-10 text-8xl font-bold text-center w-full h-full"
                style={{
                  color: color,
                  filter: hidden ? "blur(15px)" : "none",
                }}
              >
                {wordView.view}
              </div>
            </CustomTTSComponent>
            <div className="absolute left-0 top-0 z-10 text-xl py-2 px-3 text-white font-bold">
              <Eye
                isOff={hidden}
                onClick={() => setHidden(!hidden)}
                className="w-8 h-8 cursor-pointer"
              />
            </div>
            <div className="absolute right-0 top-0 text-xl py-2 px-3 text-white font-bold">
              {percentage.toFixed(1)}% ({wordSelected.right}/
              {wordSelected.total})
            </div>
          </div>
        </div>
        <InputAnswer wordSelected={wordSelected} wordView={wordView} />
      </div>
    </>
  );
}
