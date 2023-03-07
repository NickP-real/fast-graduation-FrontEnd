import { AppProps } from "next/app";

import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react";
import Session from "supertokens-auth-react/recipe/session";
import "../styles/globals.css";

import { useEffect } from "react";
import { redirectToAuth } from "supertokens-auth-react";
import { frontendConfig } from "../config/frontendConfig";

if (typeof window !== "undefined") {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === "needs-refresh") {
        if (await Session.attemptRefreshingSession()) {
          location.reload();
        } else {
          // user has been logged out
          redirectToAuth();
        }
      }
    }
    doRefresh();
  }, [pageProps.fromSupertokens]);
  if (pageProps.fromSupertokens === "needs-refresh") {
    return null;
  }
  return (
    <SuperTokensWrapper>
      <Component {...pageProps} />
    </SuperTokensWrapper>
  );
}

export default MyApp;
