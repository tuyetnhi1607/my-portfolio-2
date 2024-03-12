import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useOnClickOutside } from "usehooks-ts";
import { RootState } from "../redux/store";

export interface IDropdownProps {
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
  defaultSelected?: string;
}

export function Dropdown(props: IDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>(props.defaultSelected || "");
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div className="relative inline-block text-left w-full" ref={ref}>
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          {props.options.find((option) => option.value === selected)?.label}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          open
            ? "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            : "hidden"
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="" role="none">
          {props.options.map((option, index) => (
            <button
              key={index}
              type="button"
              className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:text-gray-900 first:rounded-t-md last:rounded-b-md"
              role="menuitem"
              id={`menu-item-${index}`}
              onClick={() => {
                props.onChange(option.value.toString());
                setOpen(false);
                setSelected(option.value);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
