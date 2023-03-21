import ChatBody from "./components/ChatBody";
import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import * as C from "./styles";

const App = () => {
  return (
    <C.Container>
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </C.Container>
  );
};

export default App;
