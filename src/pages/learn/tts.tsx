import type { TTSHookProps } from "tts-react";
import { useTts } from "tts-react";
import { SpeakerIcon } from "../../components/icons";
import { LANGUAGES_CODE } from "../../types/text-to-speech.types";

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
  return (
    <div className={`${className} w-full h-full`}>
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
