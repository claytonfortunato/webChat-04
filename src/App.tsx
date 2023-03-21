import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import * as C from "./styles";

const App = () => {
  return (
    <C.Container>
      <ChatHeader />
      <ChatInput />
    </C.Container>
  );
};

export default App;
