import { motion } from "framer-motion";
import { useRef } from "react";
import project1 from "../../assets/project1.png";
import {
  BranchIcon,
  CodeIcon,
  CommitIcon,
  LinkExternalIcon,
} from "../../components/icons";
import { useMouseMove } from "../../hooks/useMouseMove";

export interface IProjectProps {}

export function Project(props: IProjectProps) {
  const ref = useRef<any>(null);
  const { rotateX, rotateY, mouseX, mouseY } = useMouseMove(ref);

  return (
    <div className="relative w-full my-[5rem] md:my-[15rem] flex h-max">
      <div className="grid grid-cols-[20px_1fr] w-full gap-4 md:gap-11 items-end h-full">
        <div
          id="line"
          className="w-5 flex flex-col items-center h-[calc(100%_+_20vh)] md:h-[calc(100%_+_20vh)] translate-y-[7.5rem]"
        >
          <div className="flex-1">
            {" "}
            <motion.div
              whileInView={{ height: "100%" }}
              initial={{ height: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[3px] rounded-lg bg-transparent-to-pink"
            ></motion.div>
          </div>

          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-6 h-6 relative flex items-center justify-center"
          >
            <div className="absolute w-full h-full rounded-full bg-[#F778BA] blur-[8px]" />
            <CodeIcon />
          </motion.div>
          <div className="flex-1">
            <motion.div
              whileInView={{ height: "100%" }}
              initial={{ height: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-[3px] rounded-lg flex-1 bg-pink-to-transparent"
            />
          </div>
        </div>
        <div
          ref={ref}
          className="relative flex flex-col md:flex-row w-full h-full bg-[#161B22] rounded-xl border border-[#30363D] p-4 md:p-8 gap-8 overflow-hidden"
          style={{
            transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {" "}
            <div
              className="absolute w-[500px] aspect-square rounded-full bg-[#F778BA] blur-[180px] z-10 mix-blend-soft-light"
              style={{
                transform: `translateX(${mouseX}px) translateY(${mouseY}px)`,
              }}
            ></div>
          </div>
          <div>
            <motion.img
              src={project1}
              alt="project1"
              className="w-full md:w-auto h-auto md:h-full border border-[#30363D] rounded-xl"
              whileInView={{
                opacity: 1,
                transform: "translateX(0)",
              }}
              initial={{ opacity: 0, transform: "translateX(-50%)" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <motion.div
            className="flex flex-col gap-4 flex-1"
            whileInView={{
              opacity: 1,
              transform: "translateX(0)",
            }}
            initial={{ opacity: 0, transform: "translateX(50%)" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex flex-col gap-1">
              <span className="text-white opacity-50">Domains</span>
              <div
                className="hover:underline text-white cursor-pointer flex gap-1 items-center whitespace-nowrap truncate w-full"
                onClick={() =>
                  window.open(
                    "https://movie-streaming-tmdbapi-nextjs.vercel.app/",
                    "_blank"
                  )
                }
              >
                <span className="hidden md:block">
                  {" "}
                  movie-streaming-tmdbapi-nextjs.vercel.app
                </span>
                <span className="md:hidden">
                  {" "}
                  movie-streaming-tmdbapi-nextjs...
                </span>
                <LinkExternalIcon />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-white opacity-50">Status</span>
                <div className="text-white flex items-center gap-1">
                  <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                  Ready
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white opacity-50">Create</span>
                <div className="text-white flex items-center gap-1">
                  2d ago by tuyetnhi1607
                  <div className="w-6 h-6 rounded-full bg-purple-to-orange ml-1"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <span className="text-white opacity-50">Tech</span>
              </div>
              <div className="flex items-center">
                <span className="text-white">
                  Nextjs, Tailwindcss, Typescript
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <span className="text-white opacity-50">API</span>
              </div>
              <div className="flex items-center">
                <span
                  className="text-white hover:underline cursor-pointer"
                  onClick={() =>
                    window.open("https://developer.themoviedb.org/", "_blank")
                  }
                >
                  https://developer.themoviedb.org/
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center">
                <BranchIcon className="w-5 h-5 mr-2" />
                <span className="text-white">main</span>
              </div>
              <div className="flex items-center">
                <CommitIcon className="w-5 h-5 mr-2" />
                <span className="text-white">196f339 update</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
