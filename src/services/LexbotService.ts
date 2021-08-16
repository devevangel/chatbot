import { DeleteSessionCommand, GetSessionCommand, LexRuntimeV2Client, PutSessionCommand, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2";
import { createContext, useContext, useMemo } from "react";
import lexconfig from "configs/lexconfig";

export default class LexbotService {
    constructor(private readonly client: LexRuntimeV2Client) {
    }

    public async startChat(sessionId: string) {
        const response = await this.client.send(new GetSessionCommand({
            ...lexconfig.runtimeConfig,
            sessionId,
        })).catch(async (err) => {
            if (err.name === "ResourceNotFoundException") {
                return await this.client.send(
                    new PutSessionCommand({
                        ...lexconfig.runtimeConfig,
                        sessionId,
                        sessionState: { intent: { name: "StartConversation" } }
                    }),
                );
            }
            return null;
        });
        return response?.sessionState;
    }

    public async respondToUser(sessionId: string, userInput: string): Promise<string> {
        const response = await this.client.send(new RecognizeTextCommand({
            ...lexconfig.runtimeConfig,
            sessionId,
            text: userInput
        }));

        if (response.messages) {
            return response.messages[0].content!;
        }

        return "";
    }

    public async endChat(sessionId: string) {
        await this.client.send(new DeleteSessionCommand({
            ...lexconfig.runtimeConfig,
            sessionId
        })).catch(err => { });
    }
}

export const LexbotContext = createContext<LexbotService>(null!);

export const useLexbotService = (sessionId: string) => {
    const service = useContext(LexbotContext);

    return useMemo(() => ({
        startChat: async () => service.startChat(sessionId),
        respondToUser: async (userInput: string) => service.respondToUser(sessionId, userInput),
        endChat: async () => service.endChat(sessionId),
    }), [service, sessionId]);
};
