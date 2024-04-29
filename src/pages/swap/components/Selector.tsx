import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useOnClickOutside } from "usehooks-ts";
import { Angle } from "../../../components/icons";
import {
  COINA,
  COINB,
  COINC,
  DEFAULT_VALUE,
  ETH,
} from "../utils/SupportedCoins";

const Selector = ({
  defaultValue,
  ignoreValue,
  setToken,
  id,
}: {
  defaultValue: string;
  ignoreValue: string;
  setToken: (key: string) => void;
  id: string;
}) => {
  const menu = useMemo(
    () => [
      { key: ETH, name: ETH },
      { key: COINA, name: COINA },
      { key: COINB, name: COINB },
      { key: COINC, name: COINC },
    ],
    []
  );
  const getFilteredItems = useCallback(
    (ignoreValue: string) => {
      return menu.filter((item) => item["key"] !== ignoreValue);
    },
    [menu]
  );
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const [menuItems, setMenuItems] = useState(getFilteredItems(ignoreValue));
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setSelectedItem(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setMenuItems(getFilteredItems(ignoreValue));
  }, [ignoreValue, getFilteredItems]);
  useOnClickOutside(ref, () => {
    setShowMenu(false);
  });
  return (
    <div ref={ref} className="relative">
      <div
        className="w-max h-9 px-3 relative bg-neutral-900 rounded-2xl shadow border-white border-opacity-10 border-2 cursor-pointer text-white text-lg font-bold flex items-center justify-center"
        style={{
          backgroundColor: selectedItem === DEFAULT_VALUE ? "#2172e5" : "",
        }}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {selectedItem}
        <Angle className="w-4 h-4 ml-2" />
      </div>
      {showMenu && (
        <div
          className="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[400px] bg-[#2c2f36] rounded-xl shadow border-white border-opacity-10 border cursor-pointer text-white text-base flex flex-col items-start justify-center overflow-hidden"
          aria-label="Dynamic Actions"
        >
          {menuItems.map((item) => (
            <div
              className="cursor-pointer hover:bg-[#3a3d45] w-full px-4 py-2 text-base flex items-center justify-between"
              aria-label={id}
              key={item.key}
              color={item.key === "delete" ? "error" : "default"}
              onClick={() => {
                setSelectedItem(item.key);
                setToken(item.key);
                setShowMenu(false);
              }}
            >
              <span>{item.name}</span>

              <span>1000</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Selector;
