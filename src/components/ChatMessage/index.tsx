interface ChatMessageProps {
  name: string;
  message: string;
  you: boolean;
}

export function ChatMessage({ name, message, you }: ChatMessageProps) {
  return (
    <div>
      <span className="block text-xs mb-[0.625rem]">{name}</span>
      <p>{message}</p>
    </div>
  );
}
