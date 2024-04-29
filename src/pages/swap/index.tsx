import { useRef, useState } from "react";
import { useAccount } from "wagmi";
import { Arrow } from "../../components/icons";
import SwapField from "./components/SwapField";
import { DEFAULT_VALUE, ETH } from "./utils/SupportedCoins";
import {
  hasValidAllowance,
  increaseAllowance,
  swapEthToToken,
  swapTokenToEth,
  swapTokenToToken,
} from "./utils/queries";
// import { useAccount } from 'wagmi';
export interface ISwapProps {}

export function Swap(props: ISwapProps) {
  const [srcToken, setSrcToken] = useState(ETH);
  const [destToken, setDestToken] = useState(DEFAULT_VALUE);

  const [inputValue, setInputValue] = useState<string | null>();
  const [outputValue, setOutputValue] = useState<string | null>();

  const inputValueRef = useRef<any>();
  const outputValueRef = useRef<any>();

  const isReversed = useRef(false);

  const INCREASE_ALLOWANCE = "Increase allowance";
  const ENTER_AMOUNT = "Enter an amount";
  const CONNECT_WALLET = "Connect wallet";
  const SWAP = "Swap";

  const srcTokenObj = {
    id: "srcToken",
    value: inputValue,
    setValue: setInputValue,
    defaultValue: srcToken,
    ignoreValue: destToken,
    setToken: setSrcToken,
  };

  const destTokenObj = {
    id: "destToken",
    value: outputValue,
    setValue: setOutputValue,
    defaultValue: destToken,
    ignoreValue: srcToken,
    setToken: setDestToken,
  };

  const [srcTokenComp, setSrcTokenComp] = useState<any>();
  const [destTokenComp, setDestTokenComp] = useState<any>();
  const { address } = useAccount();
  const [swapBtnText, setSwapBtnText] = useState(ENTER_AMOUNT);
  const [txPending, setTxPending] = useState(false);
  function handleReverseExchange() {
    // Setting the isReversed value to prevent the input/output values
    // being calculated in their respective side - effects
    isReversed.current = true;

    // 1. Swap tokens (srcToken <-> destToken)
    // 2. Swap values (inputValue <-> outputValue)

    setInputValue(outputValue);
    setOutputValue(inputValue);

    setSrcToken(destToken);
    setDestToken(srcToken);
  }
  async function performSwap() {
    setTxPending(true);

    let receipt;

    if (srcToken === ETH && destToken !== ETH)
      receipt = await swapEthToToken(destToken, inputValue || "0");
    else if (srcToken !== ETH && destToken === ETH)
      receipt = await swapTokenToEth(srcToken, inputValue || "0");
    else
      receipt = await swapTokenToToken(srcToken, destToken, inputValue || "0");

    setTxPending(false);

    if (receipt && !receipt.hasOwnProperty("transactionHash")) {
      console.log(receipt, "receipt");
    } else {
      console.log("Transaction failed");
    }
  }
  function handleInsufficientAllowance() {
    // notifyError(
    //   "Insufficient allowance. Click 'Increase allowance' to increase it."
    // );
    console.log(
      "Insufficient allowance. Click 'Increase allowance' to increase it."
    );
    setSwapBtnText(INCREASE_ALLOWANCE);
  }
  function getSwapBtnClassName() {
    let className = "";
    className +=
      swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET
        ? " text-zinc-400 bg-zinc-800 pointer-events-none"
        : " bg-blue-700";
    className += swapBtnText === INCREASE_ALLOWANCE ? " bg-yellow-600" : "";
    return className;
  }
  async function handleSwap() {
    if (srcToken === ETH && destToken !== ETH) {
      performSwap();
    } else {
      // Check whether there is allowance when the swap deals with tokenToEth/tokenToToken
      setTxPending(true);
      const result = await hasValidAllowance(
        address,
        srcToken,
        inputValue || "0"
      );
      setTxPending(false);

      if (result) performSwap();
      else handleInsufficientAllowance();
    }
  }

  async function handleIncreaseAllowance() {
    // Increase the allowance
    setTxPending(true);
    await increaseAllowance(srcToken, inputValue || "0");
    setTxPending(false);

    // Set the swapbtn to "Swap" again
    setSwapBtnText(SWAP);
  }
  return (
    <div className="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[400px] text-white">
      <div className="relative bg-zinc-900 w-full p-4 px-6 rounded-xl">
        <div className="flex items-center justify-between py-4 px-1">
          <p>Swap</p>
        </div>
        <div className="w-full relative bg-[#1B1B1B] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600">
          <SwapField inputRef={inputValueRef} obj={srcTokenObj} />
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-10 p-1 bg-[#1B1B1B] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110 flex items-center justify-center aspect-square"
            onClick={handleReverseExchange}
          >
            <Arrow />
          </div>
        </div>

        <div className="bg-[#1B1B1B] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600">
          <SwapField inputRef={outputValueRef} obj={destTokenObj} />
        </div>

        <button
          className={`w-full h-12 bg-fuchsia-400 rounded-xl text-white text-lg font-bold mt-4 ${getSwapBtnClassName()}`}
          onClick={() => {
            if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();
            else if (swapBtnText === SWAP) handleSwap();
          }}
        >
          {swapBtnText}
        </button>
      </div>
    </div>
  );
}
