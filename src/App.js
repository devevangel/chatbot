import MainPage from "./pages/mainpage.jsx";
import "./App.css";
import LexbotService, { LexbotContext } from "services/LexbotService";
import lexconfig from "configs/lexconfig";
import { LexRuntimeV2Client } from "@aws-sdk/client-lex-runtime-v2";
import { useMemo } from "react";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";

const App = () => {
    const lexClient = useMemo(
        () =>
            new LexRuntimeV2Client({
                region: lexconfig.clientConfig.region,
                apiVersion: lexconfig.clientConfig.apiVersion,
                credentials: fromCognitoIdentityPool({
                    client: new CognitoIdentityClient({
                        region: lexconfig.clientConfig.region,
                    }),
                    identityPoolId: lexconfig.clientConfig.identityPool,
                }),
            }),
        []
    );

    return (
        <div className="App">
            <LexbotContext.Provider value={new LexbotService(lexClient)}>
                <MainPage />
            </LexbotContext.Provider>
        </div>
    );
};

export default App;
