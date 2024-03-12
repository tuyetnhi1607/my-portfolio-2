import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../../components/dropdown";
import {
  IWord,
  filterTopic,
  setModeView,
} from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";
import { ETopic } from "../../types/topic.types";
import { LANGUAGES, LANGUAGES_CODE } from "../../types/text-to-speech.types";

export interface IListWordsProps {}

export function ListWords(props: IListWordsProps) {
  const { words, topic, modeView } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const options: {
    label: string;
    value: ETopic;
  }[] = [
    {
      label: "All",
      value: ETopic.All,
    },
    {
      label: "animals",
      value: ETopic.ANIMALS,
    },
    {
      label: "colors",
      value: ETopic.COLORS,
    },
    {
      label: "food",
      value: ETopic.FOOD,
    },
    {
      label: "items",
      value: ETopic.ITEMS,
    },
    {
      label: "jobs",
      value: ETopic.JOBS,
    },
    {
      label: "numbers",
      value: ETopic.NUMBERS,
    },
    {
      label: "places",
      value: ETopic.PLACES,
    },
    {
      label: "professions",
      value: ETopic.PROFESSIONS,
    },
    {
      label: "school",
      value: ETopic.SCHOOL,
    },
    {
      label: "shopping",
      value: ETopic.SHOPPING,
    },
    {
      label: "sports",
      value: ETopic.SPORTS,
    },
    {
      label: "time",
      value: ETopic.TIME,
    },
    {
      label: "transportation",
      value: ETopic.TRANSPORTATION,
    },
    {
      label: "subjects",
      value: ETopic.SUBJECTS,
    },
    {
      label: "weather",
      value: ETopic.WEATHER,
    },
    {
      label: "family",
      value: ETopic.FAMILY,
    },
  ];
  const modeViewOptions = [...LANGUAGES];
  const filteredWords = [...words].filter((word) => {
    return topic === ETopic.All || word.topic === topic;
  });
  return (
    <div className="flex flex-col bg-white w-max py-4 gap-4 max-h-screen">
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

      <div className="grid grid-cols-1 w-max gap-2 overflow-y-auto  min-w-[300px]">
        {" "}
        {filteredWords.map((word: IWord, index: number) => {
          const percentage = (word.right / word.total) * 100 || 0;
          return (
            <div
              key={index}
              className="flex w-full justify-between gap-8 px-2 py-1 rounded-md"
              style={{
                backgroundColor:
                  percentage === 100
                    ? "#66e283"
                    : percentage < 50
                    ? "#f8d7da"
                    : "#fff3cd",
                color:
                  percentage === 100
                    ? "#0f5132"
                    : percentage < 50
                    ? "#842029"
                    : "#664d03",
              }}
            >
              <div className="whitespace-nowrap">{index + 1}</div>
              <div className="whitespace-nowrap text-left w-full">
                {modeView === LANGUAGES_CODE.JA ? word.word : word.meaning}
              </div>
              <div className="whitespace-nowrap">
                {percentage.toFixed(1)}% ({word.right}/{word.total})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
