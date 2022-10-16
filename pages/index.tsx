import React from "react";
import {
  SessionAuth,
  useSessionContext,
} from "supertokens-auth-react/recipe/session";
import Home from "./main";

export default function Index() {
  const session = useSessionContext();
  console.log(session);
  return (
    // we protect ProtectedPage by wrapping it with EmailPasswordAuth
    <SessionAuth>
      <Home />
    </SessionAuth>
  );
}
