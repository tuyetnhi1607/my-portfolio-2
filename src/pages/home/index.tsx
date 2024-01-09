import { Kirby } from "../../components/atoms/kirby";
import { Intro } from "./intro";
import { Milestone2 } from "./milestone2";
import { Roadmap } from "./roadmap";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <div className="w-screen max-w-7xl mx-auto px-4 md:px-0">
      <Intro />
      <Roadmap />
      <Milestone2 />
      <Kirby />
    </div>
  );
}
