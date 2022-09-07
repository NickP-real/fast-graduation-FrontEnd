import EmailPasswordReact from 'supertokens-auth-react/recipe/emailpassword'
import SuperTokens from "supertokens-auth-react"
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'

export const frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      EmailPasswordReact.init({
        emailVerificationFeature: {
          mode: "REQUIRED"
        }
      }),
      SessionReact.init(),
    ],
  }
}