import * as C from "./styles";
import { CircleNotch, PaperPlaneRight } from "phosphor-react";

const ChatInput = () => {
  return (
    <C.Container>
      <input type="text" placeholder="Digite sua mensagem" />
      <C.Button>
        <PaperPlaneRight size={24} />
      </C.Button>
    </C.Container>
  );
};

export default ChatInput;
