import { MessageContext } from "../contexts/MessageContext";
import { useContext } from "react";

export const useMessage = () => {
  const context = useContext(MessageContext);
};
