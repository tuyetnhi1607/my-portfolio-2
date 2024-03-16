import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../../components/dropdown";
import {
  IWordOrSentence,
  filterTopic,
  setModeView,
} from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";
import { LANGUAGES, LANGUAGES_CODE } from "../../types/text-to-speech.types";
import { ETopic } from "../../types/topic.types";

export interface IListWordsProps {}

export function ListWords(props: IListWordsProps) {
  const { words, topic, modeView } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const options = Object.keys(ETopic).map((key) => {
    return {
      label: key.replace(/_/g, " ").toLowerCase(),
      value: ETopic[key as keyof typeof ETopic],
    };
  });
  const modeViewOptions = [...LANGUAGES];
  const filteredWords = [...words].filter((wordOrSentence) => {
    return topic === ETopic.All || wordOrSentence.topic === topic;
  });

  const totalPercentage =
    (filteredWords.reduce((acc, wordOrSentence) => {
      return acc + wordOrSentence.right;
    }, 0) /
      filteredWords.reduce((acc, wordOrSentence) => {
        return acc + wordOrSentence.total;
      }, 0)) *
      100 || 0;
  return (
    <div className="relative z-10 w-full h-max flex flex-col py-4 gap-4 max-h-screen md:max-w-64 bg-transparent">
      <div className="flex w-full gap-2">
        {" "}
        <Dropdown
          options={options}
          onChange={(value) => {
            dispatch(filterTopic(value as ETopic));
          }}
          defaultSelected={topic}
        />
        <Dropdown
          options={modeViewOptions}
          onChange={(value) => {
            dispatch(setModeView(value as LANGUAGES_CODE));
          }}
          defaultSelected={modeView}
        />
      </div>
      <span
        className={`text-right text-xl font-bold ${
          totalPercentage >= 90 ? "text-green-500" : "text-red-500"
        }`}
      >
        {totalPercentage.toFixed(1)}%
      </span>
      <div className="grid grid-cols-1 gap-2 overflow-y-auto w-full">
        {" "}
        {filteredWords.map((wordOrSentence: IWordOrSentence, index: number) => {
          const percentageRight =
            (wordOrSentence.right / wordOrSentence.total) * 100 || 0;
          return (
            <div
              key={index}
              className="flex w-full justify-between gap-8 px-2 py-1 rounded-md"
              style={{
                background: `linear-gradient(to right, #66e283 ${percentageRight}%, #f8d7da ${percentageRight}%)`,
              }}
            >
              <div className="whitespace-nowrap">{index + 1}</div>
              <div className="whitespace-nowrap text-left w-full md:text-ellipsis max-w-[100px] overflow-hidden">
                {modeView === LANGUAGES_CODE.JA
                  ? wordOrSentence.wordOrSentence
                  : wordOrSentence.meaning}
              </div>
              <div className="whitespace-nowrap">
                {percentageRight.toFixed(1)}% ({wordOrSentence.right}/
                {wordOrSentence.total})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
