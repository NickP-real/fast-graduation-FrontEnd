import EmailPasswordReact from "supertokens-auth-react/recipe/emailpassword";
import SessionReact from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";

export const frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      EmailPasswordReact.init({
        signInAndUpFeature: {
          signUpForm: {
            formFields: [
              {
                id: "student_id",
                label: "Student ID",
                placeholder: "63*******",
              },
              {
                id: "fname_th",
                label: "Thai first name",
                placeholder: "ชื่อภาษาไทย",
              },
              {
                id: "mname_th",
                label: "Thai middle name",
                placeholder: "ชื่อกลางภาษาไทย",
                optional: true,
              },
              {
                id: "lname_th",
                label: "Thai last name",
                placeholder: "นามสกุลภาษาไทย",
              },
              {
                id: "fname_en",
                label: "English first name",
                placeholder: "First name in English",
              },
              {
                id: "mname_en",
                label: "English middle name",
                placeholder: "Middle name in English",
                optional: true,
              },
              {
                id: "lname_en",
                label: "English last name",
                placeholder: "Last name in English",
              },
            ],
          },
        },
      }),
      SessionReact.init(),
    ],
  };
};
