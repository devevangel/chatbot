import { Message, MessageGroup } from "@chatscope/chat-ui-kit-react";

const UserChat = () => {
  return (
    <MessageGroup direction="incoming" sender="Lilly" sentTime="just now">
      <MessageGroup.Messages>
        <Message.Header sender="User" />
        <Message
          model={{
            message: "Hello my friend",
          }}
        />
      </MessageGroup.Messages>
    </MessageGroup>
  );
};

export default UserChat;
