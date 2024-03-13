import { useSelector } from "react-redux";
import { IWord } from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";
import { LANGUAGES_CODE } from "../../types/text-to-speech.types";
import { ETopic } from "../../types/topic.types";
import { InputAnswer } from "./inputAnswer";
import { CustomTTSComponent } from "./tts";

export interface IMainProps {}

function getRandomObjectByLowestPercentage(objects: IWord[], topic: ETopic) {
  const filteredWords = [...objects].filter((word) => {
    return topic === ETopic.All || word.topic === topic;
  });
  const objectsWithLowestPercentage = filteredWords.filter((obj) => {
    const percentage = (obj.right / obj.total) * 100 || 0;
    return percentage < 100;
  });

  const randomIndex = Math.floor(
    Math.random() * objectsWithLowestPercentage.length
  );
  return objectsWithLowestPercentage[randomIndex];
}

export function Main(props: IMainProps) {
  const { words, topic, modeView } = useSelector((state: RootState) => state);
  const wordSelected: IWord = getRandomObjectByLowestPercentage(words, topic);

  const wordView = {
    ...wordSelected,
    view:
      modeView === LANGUAGES_CODE.JA
        ? wordSelected?.word
        : wordSelected?.meaning,
    answer:
      modeView === LANGUAGES_CODE.JA
        ? wordSelected?.meaning
        : wordSelected?.word,
  };
  const percentage = (wordSelected.right / wordSelected.total) * 100 || 0;
  const listColor = ["#35b8a6", "#fc8f58", "#399acb", "#c93eec", "#f30940"];
  const color = listColor[Math.floor(Math.random() * listColor.length)];
  return (
    <div className="font-noto-JP flex-1 h-full min-w-96 flex flex-col items-center justify-center gap-8">
      <div className={`w-full max-w-2xl min-w-xl flex items-center`}>
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
            key={wordView.view}
          >
            <div
              className="z-10 text-8xl font-bold text-center w-full h-full"
              style={{
                color: color,
              }}
            >
              {wordView.view}
            </div>
          </CustomTTSComponent>
          <div className="absolute right-0 top-0 text-xl py-2 px-3 text-white font-bold">
            {percentage.toFixed(1)}% ({wordSelected.right}/{wordSelected.total})
          </div>
        </div>
      </div>
      <InputAnswer wordSelected={wordSelected} wordView={wordView} />
    </div>
  );
}
