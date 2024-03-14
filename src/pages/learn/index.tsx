import { useSelector } from "react-redux";
import { IWordOrSentence } from "../../redux/features/words/slices";
import { ETopic } from "../../types/topic.types";
import { AddNewWord } from "./addNewWord";
import { ListWords } from "./listWords";
import { Main } from "./main";
import { RootState } from "../../redux/store";
export interface ILearnProps {}

function getRandomObjectByLowestPercentage(
  objects: IWordOrSentence[],
  topic: ETopic
) {
  const filteredWords = [...objects].filter((wordOrSentence) => {
    return topic === ETopic.All || wordOrSentence.topic === topic;
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

export function Learn(props: ILearnProps) {
  const { words, topic } = useSelector((state: RootState) => state);
  const wordSelected: IWordOrSentence = getRandomObjectByLowestPercentage(
    words,
    topic
  );

  return (
    <div className="relative flex flex-col md:flex-row w-full h-screen bg-white gap-4 ">
      <AddNewWord />
      <Main wordSelected={wordSelected} />
      <ListWords />
    </div>
  );
}
