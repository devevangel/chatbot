import react from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import UserChat from "./userchat.component";
import BotChat from "./botchat.component";

import "./chatholder.styles.css";

class ChatHolder extends react.Component {
  constructor() {
    super();

    this.state = {
      bot: [
        {
          id: 1,
          msg: "Hello, how may I help you?",
        },
        {
          id: 2,
          msg: "Hi, my names Chidi and what would you like to have?",
        },
        {
          id: 3,
          msg: "Hello, what would you like to have?",
        },
        {
          id: 4,
          msg: "Hi, having a good day?",
        },
        {
          id: 5,
          msg: "Hello, welcome to Chidi's Pizza House",
        },
      ],
      user: [],
    };
  }

  render() {
    return (
      <div className="holder">
        <MainContainer>
          <ChatContainer>
            <MessageList>
              <UserChat />
              <BotChat />
              <BotChat />
              <UserChat />
              <UserChat />
            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>
    );
  }
}

export default ChatHolder;
