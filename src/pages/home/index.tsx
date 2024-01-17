import { Kirby } from "../../components/atoms/kirby";
import { CloudIcon } from "./cloud";
import { Intro } from "./intro";
import { Milestone2 } from "./milestone2";
import { Project } from "./projects";
import { Roadmap } from "./roadmap";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <div className="w-screen max-w-7xl mx-auto px-4 md:px-0 pb-[20rem]">
      <Intro />
      <Roadmap />
      <Milestone2 />
      <Project />
      {/* <CloudIcon /> */}
      <Kirby />
    </div>
  );
}
