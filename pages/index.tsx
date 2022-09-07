import React from "react";
import dynamic from "next/dynamic";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import ProtectedPage from "./protectedpage";

export default function Index() {
  return (
    <EmailPassword.EmailPasswordAuth>
      <ProtectedPage />
    </EmailPassword.EmailPasswordAuth>
  );
}
