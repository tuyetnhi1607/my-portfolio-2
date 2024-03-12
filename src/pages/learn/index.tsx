import { AddNewWord } from "./addNewWord";
import { ListWords } from "./listWords";
import { Main } from "./main";
export interface ILearnProps {}

declare global {
  interface Window {
    talkifyConfig: any;
  }
}
export function Learn(props: ILearnProps) {
  return (
    <div className="flex w-full h-screen bg-white">
      <AddNewWord />
      <Main />
      <ListWords />
    </div>
  );
}
