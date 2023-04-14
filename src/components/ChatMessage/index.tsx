import * as C from "./styles";

type ChatMessageProps = {
  name: string;
  message: string;
};

export function ChatMessage({ name, message }: ChatMessageProps) {
  return (
    <C.Container>
      <span>{name}</span>
      <C.Background>
        <p>{message}</p>
      </C.Background>
    </C.Container>
  );
}
