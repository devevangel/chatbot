import { Message, MessageGroup } from "@chatscope/chat-ui-kit-react";

const BotChat = () => {
  return (
    <MessageGroup direction="outgoing" sender="bot" sentTime="just now">
      <MessageGroup.Messages>
        <Message.Header sender="Bot" />
        <Message
          model={{
            message: "Hello my friend",
          }}
        />
      </MessageGroup.Messages>
    </MessageGroup>
  );
};

export default BotChat;
