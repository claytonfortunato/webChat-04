import * as C from "./styles";

import clsx from "clsx";

type ChatMessageProps = {
  name: string;
  message: string;
  you: boolean;
};

export function ChatMessage({ name, message, you }: ChatMessageProps) {
  return (
    <C.Container
      className={clsx("flex flex-col ", {
        "items-start": you === true,
        "items-end": you === false,
      })}
    >
      <span>{name}</span>
      <C.Background>
        <p
          className={clsx({
            "bg-violet-500 rounded-r-lg": you === true,
            "bg-green-700 rounded-t-lg": you === false,
          })}
        >
          {message}
        </p>
      </C.Background>
    </C.Container>
  );
}
