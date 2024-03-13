import { useSelector } from "react-redux";
import { IWord } from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";
import { LANGUAGES_CODE } from "../../types/text-to-speech.types";
import { ETopic } from "../../types/topic.types";
import { InputAnswer } from "./inputAnswer";
import { Speaker } from "./speaker";

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
    <div className="font-noto-JP w-full min-w-[300px] h-full flex flex-col items-center justify-center gap-8">
      <div className={`w-1/2 flex items-center`}>
        <div
          className={`relative w-full min-h-[30vh] flex items-center justify-center px-6`}
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
          <div className="absolute right-0 bottom-0 p-3">
            <Speaker text={wordView.view} mode={modeView} />
          </div>

          <div className="absolute right-0 top-0 text-xl py-2 px-3 text-white font-bold">
            {percentage.toFixed(1)}% ({wordSelected.right}/{wordSelected.total})
          </div>
        </div>
      </div>
      <InputAnswer wordSelected={wordSelected} wordView={wordView} />
    </div>
  );
}
