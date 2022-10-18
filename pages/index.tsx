import React from "react";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import Home from "./main";

export default function Index() {
  return (
    // we protect ProtectedPage by wrapping it with EmailPasswordAuth
    <SessionAuth>
      <Home />
    </SessionAuth>
  );
}
