import intro from "../../assets/intro.png";
import react from "../../assets/react-logo.png";
import tailwind from "../../assets/tailwind-logo.png";
import typescript from "../../assets/typescript_logo.png";
import web3 from "../../assets/web3_logo.png";
import { CodeIcon } from "../../components/icons";

export interface IIntroProps {}

export function Intro(props: IIntroProps) {
  const technologies = [react, typescript, tailwind, web3];
  return (
    <div className="relative w-full h-screen flex items-center">
      <img src={intro} alt="intro" className="absolute top-0 left-0 sm:left-[60%] -z-10" />
      <div
        id="main"
        className="grid grid-cols-[20px_1fr] w-full gap-4 md:gap-11 items-end h-max p-4"
      >
        <div id="line" className="w-5 flex flex-col items-center h-full">
          <div className="w-3 h-3 rounded-full bg-transparent border-2 border-white opacity-30" />
          <div className="w-[3px] rounded-lg flex-1 bg-transparent-to-purple" />
          <div className="w-6 h-6 relative flex items-center justify-center before:absolute before:rounded-full before:w-full before:h-full before:bg-[#7C72FF] before:blur-[8px]">
            <CodeIcon />
          </div>
          <div className="w-[3px] rounded-lg flex-1 bg-purple-to-green" />
        </div>
        <div
          id="content"
          className="flex flex-col items-start justify-start max-w-2xl"
        >
          <span className="text-white text-6xl md:text-8xl font-bold text-left">Hello, I’m Nhi</span>
          <span className="text-[#848D97] text-xl md:text-2xl font-normal text-left mt-8">
            I’m a front-end developer based in Vietnam. I code beautifully
            simple things, and I love what I do
          </span>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 mt-8 w-full">
            <div className="h-12  p-4 bg-white rounded-md md:rounded-tr-none md:rounded-br-none  flex items-center text-[#6E7781]">
              dinhtuyetnhi1607@gmail.com
            </div>
            <div className="h-12 p-4 bg-[#6E40C9] rounded-md md:rounded-tl-none md:rounded-bl-none text-white flex items-center">
              Contact me by Email
            </div>
          </div>
          <div className=" md:hidden w-full h-[1px] bg-[#30363D] my-4" />
          <div className="flex flex-col items-start justify-start md:my-24">
            <span className="text-[#848D97] text-lg md:text-xl font-normal text-left">
              Technologies I use regularly
            </span>
            <div className="flex flex-wrap gap-8 mt-7">
              {technologies.map((technology, index) => (
                <div
                  className="w-auto h-12 md:h-16 flex items-center justify-center"
                  key={index + "technology"}
                >
                  <img
                    src={technology}
                    alt="technology"
                    className="h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
