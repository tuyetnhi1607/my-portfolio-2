import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../../components/dropdown";
import { IWord, filterUnit } from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";

export interface IListWordsProps {}

export function ListWords(props: IListWordsProps) {
  const { words, unit } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const options = [
    {
      label: "All",
      value: 0,
    },
    {
      label: "Unit 1",
      value: 1,
    },
    {
      label: "Unit 2",
      value: 2,
    },
    {
      label: "Unit 3",
      value: 3,
    },
    { label: "Unit 4", value: 4 },
  ];
  const filteredWords = [...words].filter((word) => {
    return unit === 0 || word.unit === unit;
  });
  return (
    <div className="flex flex-col bg-white w-max p-4 gap-4 max-h-screen overflow-y-auto min-w-[300px]">
      <Dropdown
        options={options}
        onChange={(value) => {
          dispatch(filterUnit(Number(value)));
        }}
      />
      <div className="grid grid-cols-1 w-max gap-2">
        {" "}
        {filteredWords.map((word: IWord, index: number) => {
          const percentage = (word.right / word.total) * 100 || 0;
          return (
            <div
              key={index}
              className="flex w-full justify-between gap-8 px-2 py-1"
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
              <div className="whitespace-nowrap text-left w-full">{word.word}</div>
              <div className="whitespace-nowrap">{percentage.toFixed(1)}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
