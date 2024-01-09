import { motion } from "framer-motion";
import cms1 from "../../assets/cms1.png";
import cms2 from "../../assets/cms2.png";
import shape1 from "../../assets/shape-1.png";
import { WorkIcon } from "../../components/icons";

export interface IRoadmapProps {}

export function Roadmap(props: IRoadmapProps) {
  return (
    <div className="relative w-full">
      <div className="absolute w-1/2 md:w-auto top-0 right-0 sm:left-[70%] -z-10">
        <img src={shape1} alt="shape-1" className="animate-spin-slow" />
      </div>
      <div
        id="milestone-1"
        className="grid grid-cols-[20px_1fr] w-full gap-4 md:gap-11 items-end h-max"
      >
        <div id="line" className="w-5 flex flex-col items-center h-full">
          {" "}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-6 h-6 relative flex items-center justify-center"
          >
            <div className="absolute w-full h-full rounded-full bg-[#3FB950] blur-[8px]" />
            <WorkIcon />
          </motion.div>{" "}
          <motion.div
            className="w-[3px] rounded-lg bg-green-to-transparent"
            whileInView={{ flex: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </div>
        <div
          id="content"
          className="flex flex-col items-start justify-start max-w-2xl pb-10"
        >
          <span className="text-white text-2xl font-bold"> 2019-2021</span>
          <span className="text-[#3FB950] text-4xl md:text-6xl font-bold text-left mt-4 md:mt-6">
            Intern
          </span>
          <span className="text-white text-base md:text-lg font-normal text-left mt-4 md:mt-6">
            At that place, I use React.js, Material-UI, Axios to execute
            projects related to Content Management Systems (CMS), and the
            management of education for universities.
          </span>
        </div>
      </div>

      <div className="relative w-full">
        <motion.img
          src={cms1}
          alt="cms1"
          className="w-full h-auto border border-[#30363D] rounded-xl"
          whileInView={{
            opacity: 1,
            transform: "translateX(0)",
          }}
          initial={{ opacity: 0, transform: "translateX(10%)" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.img
          src={cms2}
          alt="cms2"
          className="absolute top-1/4 left-1/2 w-[45%] h-auto rounded-xl"
          whileInView={{
            opacity: 1,
            transform: "translateX(0)",
          }}
          initial={{ opacity: 0, transform: "translateX(-10%)" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 -right-1/4 w-1/2 aspect-square bg-[#6E40C9] blur-[100px] rounded-full -z-10"
          whileInView={{
            opacity: 0.3,
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
}
