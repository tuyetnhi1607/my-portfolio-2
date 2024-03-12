import * as React from "react";
import { SpeakerIcon } from "../../components/icons";
import { LANGUAGES_CODE } from "../../types/text-to-speech.types";

export interface ISpeakerProps {
  text: string;
  mode: LANGUAGES_CODE;
  autoPlay?: boolean;
}
export const apiKey = "332c16d1a8db4a10b44047fd0888b485";

export function Speaker({ text, mode }: ISpeakerProps) {
  const playAudio = React.useCallback(() => {
    const audio = new Audio(
      `http://api.voicerss.org/?key=${apiKey}&hl=${mode}&src=${text}`
    );
    audio.play();
  }, [text, mode]);

  return (
    <div className="">
      <SpeakerIcon className="w-10 h-10 cursor-pointer" onClick={playAudio} />
    </div>
  );
}
