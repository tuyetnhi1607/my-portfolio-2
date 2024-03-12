import * as React from "react";
import { AddNewWord } from "./addNewWord";
import { Main } from "./main";
import { ListWords } from "./listWords";

export interface ILearnProps {}

export function Learn(props: ILearnProps) {
  return (
    <div className="flex w-full h-screen bg-white">
      <AddNewWord />
      <Main />
      <ListWords />
    </div>
  );
}
