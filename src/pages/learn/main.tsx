import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export interface IMainProps {}

export function Main(props: IMainProps) {
  const { words } = useSelector((state: RootState) => state);
  const [dataSelected, setDataSelected] = React.useState(words[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="font-noto-JP w-full h-full flex flex-col items-center justify-center ">
      <div className="w-1/2 h-1/2 bg-slate-400 flex items-center">
        {/* view */}
        <div className="w-full h-1/2 flex items-center justify-center">
          {dataSelected.word}
        </div>
        {/* percent */}
        <div className="w-full h-1/2 flex items-center justify-center bg-yellow-300">
          {dataSelected.total === 0
            ? 0
            : (dataSelected.right / dataSelected.total) * 100}
          %
        </div>
      </div>
      <div className="w-1/2 h-1/2 bg-slate-400 flex items-center justify-center">
        <input
          type="text"
          className="w-1/2 h-1/2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}
