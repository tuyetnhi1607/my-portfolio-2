import type { TTSHookProps } from "tts-react";
import { useTts } from "tts-react";
import { SpeakerIcon } from "../../components/icons";
import { LANGUAGES_CODE } from "../../types/text-to-speech.types";
import { useEffect } from "react";

interface CustomProps extends TTSHookProps {
  lang?: LANGUAGES_CODE;
  classNameIcon?: string;
  className?: string;
}

export const CustomTTSComponent = ({
  children,
  lang = LANGUAGES_CODE.JA,
  classNameIcon,
  className,
}: CustomProps) => {
  const { ttsChildren, play } = useTts({
    children,
    lang: lang,
    autoPlay: true,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        play();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [play]);
  return (
    <div className={`${className} z-10 w-full h-full`}>
      <SpeakerIcon
        className={`w-10 h-10 cursor-pointer ${classNameIcon}`}
        onClick={() => {
          play();
        }}
      />
      {ttsChildren}
    </div>
  );
};
