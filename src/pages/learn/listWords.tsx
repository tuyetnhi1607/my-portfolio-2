import { useSelector } from "react-redux";
import { IWord } from "../../redux/features/words/slices";
import { RootState } from "../../redux/store";

export interface IListWordsProps {}

export function ListWords(props: IListWordsProps) {
  const { words } = useSelector((state: RootState) => state);
  return (
    <div className="flex flex-col bg-white w-max p-4">
      {words.map((word: IWord, index: number) => {
        return (
          <div key={index} className="flex w-full justify-between gap-8">
            <div className="whitespace-nowrap">{index + 1}</div>
            <div className="whitespace-nowrap">{word.word}</div>
            <div className="">
              {word.total === 0 ? 0 : (word.right / word.total) * 100}%
            </div>
          </div>
        );
      })}
    </div>
  );
}
