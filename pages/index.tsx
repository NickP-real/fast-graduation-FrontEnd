import React from "react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Home from "./main";

export default function Index() {
  return (
    // we protect ProtectedPage by wrapping it with EmailPasswordAuth
    <EmailPassword.EmailPasswordAuth>
      <Home />
    </EmailPassword.EmailPasswordAuth>
  );
}
