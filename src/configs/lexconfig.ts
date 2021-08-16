const config = {
    runtimeConfig: {
        botId: process.env.REACT_APP_LEX_BOT_ID,
        botAliasId: process.env.REACT_APP_LEX_BOT_ALIAS_ID,
        localeId: process.env.REACT_APP_LEX_BOT_LOCALE_ID,
        requestAttributes: {
            "x-amz-lex:time-zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
        }
    },

    clientConfig: {
        region: process.env.REACT_APP_LEX_BOT_REGION_ID,
        apiVersion: process.env.REACT_APP_LEX_BOT_API_VERSION,
        identityPool: process.env.REACT_APP_LEX_BOT_IDENTITY_POOL
    }
}

export default config;
