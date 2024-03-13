import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../../components/dropdown";
import {
  IWord,
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
  const filteredWords = [...words].filter((word) => {
    return topic === ETopic.All || word.topic === topic;
  });
  return (
    <div className="w-full flex flex-col bg-white py-4 gap-4 max-h-screen md:max-w-64">
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

      <div className="grid grid-cols-1 gap-2 overflow-y-auto w-full">
        {" "}
        {filteredWords.map((word: IWord, index: number) => {
          const percentageRight = (word.right / word.total) * 100 || 0;
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
                {modeView === LANGUAGES_CODE.JA ? word.word : word.meaning}
              </div>
              <div className="whitespace-nowrap">
                {percentageRight.toFixed(1)}% ({word.right}/{word.total})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
