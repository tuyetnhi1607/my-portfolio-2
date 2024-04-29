import React from "react";
import Selector from "./Selector";

interface SwapFieldProps {
  obj: {
    id: string;
    value: string | null | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | null | undefined>>;
    defaultValue: string;
    ignoreValue: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
  };
  inputRef: React.Ref<HTMLInputElement>;
}
const SwapField = React.forwardRef(
  ({ obj, inputRef }: SwapFieldProps
) => {
    const {
      id,
      value = "",
      setValue,
      defaultValue,
      setToken,
      ignoreValue,
    } = obj;

    return (
      <div className="flex items-center rounded-xl">
        <input
          ref={inputRef}
          className={getInputClassName()}
          type={"number"}
          value={value || ""}
          placeholder={"0.0"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <Selector
          id={id}
          setToken={setToken}
          defaultValue={defaultValue}
          ignoreValue={ignoreValue}
        />
      </div>
    );

    function getInputClassName() {
      let className =
        " w-full outline-none h-8 px-2 appearance-none text-3xl bg-transparent text-white";
      return className;
    }
  }
);

export default SwapField;
