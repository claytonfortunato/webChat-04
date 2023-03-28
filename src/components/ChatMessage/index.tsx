import * as C from "./styles";

interface ChatMessageProps {
  name: string;
  message: string;
  you: boolean;
}

export function ChatMessage({ name, message, you }: ChatMessageProps) {
  return (
    <C.Container>
      <span>{name}</span>
      <p>{message}</p>
    </C.Container>
  );
}
