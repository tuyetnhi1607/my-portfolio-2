import { AddNewWord } from "./addNewWord";
import { ListWords } from "./listWords";
import { Main } from "./main";
export interface ILearnProps {}

export function Learn(props: ILearnProps) {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-screen bg-white gap-4 ">
      <AddNewWord />
      <Main />
      <ListWords />
    </div>
  );
}
