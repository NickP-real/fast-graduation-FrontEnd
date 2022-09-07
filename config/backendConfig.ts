import EmailPasswordNode from 'supertokens-node/recipe/emailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import { appInfo } from './appInfo'
import { TypeInput } from "supertokens-node/types";

export const backendConfig = (): TypeInput => {
  return {
    framework: "express",
    supertokens: {
      // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: "http://localhost:3567",
      // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
    },
    appInfo,
    recipeList: [
      EmailPasswordNode.init({
        emailVerificationFeature: {
          mode: "REQUIRED" }
      }),
      SessionNode.init(),
    ],
    isInServerlessEnv: true,
  }
}

