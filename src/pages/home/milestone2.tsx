import { motion } from "framer-motion";
import React from "react";
import connect_wallet from "../../assets/connect-wallet.png";
import demo from "../../assets/demo.png";
import line from "../../assets/line.png";
import shape2 from "../../assets/shape-2.png";
import swap from "../../assets/swap.png";
import { useMouseMove } from "../../hooks/useMouseMove";
export interface IMilestone2Props {}

export function Milestone2(props: IMilestone2Props) {
  const ref = React.useRef<any>(null);
  const { rotateX, rotateY, mouseX, mouseY } = useMouseMove(ref);
  return (
    <>
      <div
        id="milestone-2"
        className="grid grid-cols-[20px_1fr] w-full gap-4 md:gap-11 items-end h-max"
      >
        <div id="line" className="w-5 flex flex-col items-center h-full">
          <motion.div
            whileInView={{ height: "100%" }}
            initial={{ height: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[3px] rounded-lg bg-transparent-to-green-to-transparent"
          />
        </div>
        <div
          id="content"
          className="flex flex-col items-start justify-start max-w-2xl pt-[10rem] md:pt-[20rem] pb-[5rem] md:pb-[10rem]"
        >
          <span className="text-[#3FB950] text-base font-bold">
            Full-time and freelance
          </span>
          <div className="relative text-[#3FB950] text-5xl md:text-7xl font-bold mt-4 md:mt-6">
            <span> 2021 - 2023</span>
            <motion.img
              className="absolute top-1/2 -translate-y-1/2 right-full w-7 md:w-14"
              src={line}
              alt="line"
              whileInView={{
                opacity: 1,
              }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>

          <span className="text-white text-base md:text-lg font-normal text-left mt-4 md:mt-6">
            I work for a blockchain startup company where I utilize libraries to
            execute fundamental use cases of a blockchain application such as
            ConnectWallet, Swap, Transfer, readContract, writeContract.
          </span>
        </div>{" "}
        <img
          src={shape2}
          alt="shape-2"
          className="animate-spin-slow absolute -top-2/3 right-0 -z-10 w-[40%]"
        />
      </div>
      <div className="relative w-full" ref={ref}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {" "}
          <div
            className="absolute w-[500px] aspect-square rounded-full bg-[#3FB950] blur-[180px] z-10 mix-blend-soft-light"
            style={{
              transform: `translateX(${mouseX}px) translateY(${mouseY}px)`,
            }}
          ></div>
        </div>

        <img
          src={demo}
          alt="demo"
          className="w-full h-auto border border-[#30363D] rounded-xl"
        />
        <motion.img
          src={connect_wallet}
          alt="connect_wallet"
          className="absolute top-[10%] right-[5%] w-[35%] h-auto rounded-xl z-20"
          whileInView={{
            opacity: 1,
            transform: "translateX(0)",
          }}
          initial={{ opacity: 0, transform: "translateX(10%)" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.img
          src={swap}
          alt="swap"
          className="absolute top-1/3 right-1/4 w-[30%] h-auto rounded-xl z-20"
          whileInView={{
            opacity: 1,
            transform: "translateX(0)",
          }}
          initial={{ opacity: 0, transform: "translateX(-10%)" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <div className="absolute top-1/2 -right-1/4 w-1/2 aspect-square bg-[#167AF3] blur-[100px] rounded-full -z-10 opacity-20"></div>
      </div>
    </>
  );
}
