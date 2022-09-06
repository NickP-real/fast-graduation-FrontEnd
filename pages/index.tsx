import React from "react";
import dynamic from "next/dynamic";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import ProtectedPage from "./protectedpage";

export default function Home() {
  return (
    // we protect ProtectedPage by wrapping it with EmailPasswordAuth

    <EmailPassword.EmailPasswordAuth>
      <ProtectedPage />
    </EmailPassword.EmailPasswordAuth>
  );
}
