import * as C from "./styles";
import { CircleNotch, PaperPlaneRight } from "phosphor-react";

const ChatInput = () => {
  return (
    <C.Container>
      <input type="text" placeholder="Digite sua mensagem" />
      <button>
        <PaperPlaneRight size={24} />
      </button>
    </C.Container>
  );
};

export default ChatInput;
