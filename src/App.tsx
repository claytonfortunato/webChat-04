import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PaperPlaneRight } from "phosphor-react";
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react";
import { ChatHeader } from "./components/ChatHeader";
import { ChatMessage } from "./components/ChatMessage";

import BotCecilia from "./assets/cecilia.jpg";

import * as C from "./styles";

const chat = {
  you: {
    id: "cecilia",
    name: "Cecilia",
    urlImage: "",
  },
  i: {
    id: "voce",
    name: "Você",
    urlImage: "",
  },
};

interface MessagesProps {
  name: string;
  id: string;
  message: string;
  hourAndMinutesMessage: string;
}

export function App() {
  const [messages, setMessages] = useState<MessagesProps[]>([]);
  const [newMessageText, setNewMessageText] = useState("");

  function handleCreateNewMessage(event: FormEvent) {
    event.preventDefault();

    const newMessage = {
      name: "Você",
      id: "voce",
      message: newMessageText,
      hourAndMinutesMessage: formatCurrentHourMinutes(0),
    };

    setMessages([...messages, newMessage]);

    setNewMessageText("");
  }

  function handleNewMessageChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewMessageText(event.target.value);
  }

  function handleNewMessageInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Informe a mensagem!");
  }

  function formatCurrentHourMinutes(decreaseMinutes: number) {
    let date = new Date();

    if (decreaseMinutes > 0) {
      date.setMinutes(date.getMinutes() - decreaseMinutes);
    }

    const hourAndMinutesFormatted = format(date, "HH:mm", { locale: ptBR });

    return hourAndMinutesFormatted;
  }

  useEffect(() => {
    const hourMinutes1 = formatCurrentHourMinutes(8);
    const hourMinutes2 = formatCurrentHourMinutes(6);
    const hourMinutes3 = formatCurrentHourMinutes(4);
    const hourMinutes4 = formatCurrentHourMinutes(2);

    const messages = [
      {
        name: "Cecilia",
        id: "cecilia",
        message: "Tive uma ideia incrível para um projeto! 😍",
        hourAndMinutesMessage: hourMinutes1,
      },
      {
        name: "Você",
        id: "voce",
        message: "Sério? Me conta mais.",
        hourAndMinutesMessage: hourMinutes2,
      },
      {
        name: "Cecilia",
        id: "cecilia",
        message:
          "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
        hourAndMinutesMessage: hourMinutes3,
      },
      {
        name: "Você",
        id: "voce",
        message: "#boraCodar! 🚀",
        hourAndMinutesMessage: hourMinutes4,
      },
    ];

    setMessages(messages);
  }, []);

  return (
    <C.Container>
      <div>
        <ChatHeader
          name={chat.you.name}
          urlImage={BotCecilia}
          hourMinutesFirstMessage={
            messages.length ? messages[0].hourAndMinutesMessage : ""
          }
        />

        <div>
          {messages.map((message, index) => {
            return (
              <ChatMessage
                key={index}
                name={message.name + " - " + message.hourAndMinutesMessage}
                message={message.message}
                you={message.id === chat.you.id}
              />
            );
          })}
        </div>

        <div>
          <form onSubmit={handleCreateNewMessage} className="relative">
            <button className="absolute top-[0.875rem] right-6" type="submit">
              <PaperPlaneRight
                size={24}
                weight="fill"
                className="text-zinc-50"
              />
            </button>
            <input
              type="text"
              id="message"
              value={newMessageText}
              placeholder="Digite sua mensagem"
              onChange={handleNewMessageChange}
              onInvalid={handleNewMessageInvalid}
              required
            />
          </form>
        </div>
      </div>
    </C.Container>
  );
}
