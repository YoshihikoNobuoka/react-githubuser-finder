import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// Auth0 domain
// Auth0 dev-kv07cgtc.us.auth0.com

// client ID
// xAlVDQnj4J7H8a4gGapk6pIMn7QRYXa7
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-kv07cgtc.us.auth0.com"
      clientId="xAlVDQnj4J7H8a4gGapk6pIMn7QRYXa7"
      redirectUri={window.location.origin}
      cacheLocationn="localstrage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
