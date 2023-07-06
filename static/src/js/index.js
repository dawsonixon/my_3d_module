import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("react-app");
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Can't find root element for React app");
}
