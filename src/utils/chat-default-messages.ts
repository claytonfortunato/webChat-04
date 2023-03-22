import { randomBytes } from "crypto";

export const chatDefaultMessages = [
  {
    id: randomBytes(20).toString("hex"),
    author: "ChatGPT",
    date: new Date(),
    message:
      "Faaaaaala dev,vamos conversar? Me faça perguntas que mostrarei as melhores respostas.",
    done: true,
  },
];
