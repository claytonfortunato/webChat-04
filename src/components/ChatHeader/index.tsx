import { X } from "phosphor-react";

import * as C from "./styles";

interface ChatHeaderProps {
  name: string;
  urlImage: string;
  hourMinutesFirstMessage: string;
}

export function ChatHeader({
  name,
  urlImage,
  hourMinutesFirstMessage,
}: ChatHeaderProps) {
  return (
    <C.Container>
      <C.Header>
        <C.Status>
          <img src={urlImage} alt="BotCecilia" />
          <div>
            <strong>{name}</strong>
            <span>Online</span>
          </div>
        </C.Status>
        <X size={20} weight="bold" />
      </C.Header>
      <span>Hoje {hourMinutesFirstMessage}</span>
    </C.Container>
  );
}
