import { Message, MessageGroup } from "@chatscope/chat-ui-kit-react";
import { useEffect, useState } from "react";
import { useLexbotService } from "services/LexbotService";
import { nanoid } from "nanoid";
import { useLocalStorage } from "react-use";

const BotChat = () => {
    const [chatSession] = useLocalStorage("chat-sessionid", nanoid());
    const botService = useLexbotService(chatSession);
    const [chatSessionState, setchatSessionState] = useState();

    useEffect(() => {
        botService.startChat().then((sessionState) => {
            console.log("Bot chat initialized");
            if (sessionState) {
                setchatSessionState(sessionState);
            }
        });
        return () => {
            botService.stopChat();
        };
    }, [botService]);

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
