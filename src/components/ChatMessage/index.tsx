import * as C from "./styles";

type ChatMessageProps = {
  name: string;
  message: string;
  you: boolean;
};

export function ChatMessage({ name, message, you }: ChatMessageProps) {
  return (
    <C.Container>
      <span>{name}</span>
      <C.Background>
        <p>{message}</p>
      </C.Background>
    </C.Container>
  );
}
