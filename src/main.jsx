import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import 'leaflet/dist/leaflet.css';
import AuthContextProvider from "./components/AuthContextProvider.jsx";

import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-wz8f7addz1khwg3g.us.auth0.com"
  clientId="vgfO8aDUuvzMzC4J7uC7eVFp0ifJE8cu"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <StrictMode>
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
  </StrictMode>
  </Auth0Provider>
);
