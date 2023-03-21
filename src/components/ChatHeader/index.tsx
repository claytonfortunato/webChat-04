import * as C from "./styles";
import BotCecilia from "../../assets/cecilia.jpg";

const ChatHeader = () => {
  return (
    <C.Container>
      <C.Header>
        <img src={BotCecilia} alt="Imagem do perfil" />
        <C.Status>
          <strong>ChatGPT</strong>
          <span>Online</span>
        </C.Status>
      </C.Header>
    </C.Container>
  );
};

export default ChatHeader;
