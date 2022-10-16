import EmailPasswordNode from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import { appInfo } from "./appInfo";
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
        signUpFeature: {
          formFields: [
            {
              id: "name",
            },
            {
              id: "student_id",
            },
            {
              id: "fname_th",
            },
            {
              id: "mname_th",
              optional: true,
            },
            {
              id: "lname_th",
            },
            {
              id: "fname_en",
            },
            {
              id: "mname_en",
              optional: true,
            },
            {
              id: "lname_en",
              optional: true,
            },
          ],
        },
      }),
      Session.init(),
    ],
    isInServerlessEnv: true,
  };
};
