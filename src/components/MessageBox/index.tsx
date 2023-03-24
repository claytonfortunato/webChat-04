import { Message } from "../../types/Message.type";

interface MessageBoxProps {
  message: Message;
}

export default function MessageBox({ message }: MessageBoxProps) {
  const sentDateFormated = new Date(message.sentDate).toLocaleString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <div>
        <p>
          {message.sent ? "Você" : message.messageAuthor} - {sentDateFormated}
        </p>
      </div>
      <div>
        <p>{message.text}</p>
      </div>
    </div>
  );
}
