interface ChatMessageProps {
  name: string;
  message: string;
  you: boolean;
}

export function ChatMessage({ name, message, you }: ChatMessageProps) {
  return (
    <div>
      <span>{name}</span>
      <p>{message}</p>
    </div>
  );
}
