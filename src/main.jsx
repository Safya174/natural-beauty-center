import '@fontsource/alexandria/400.css';
import '@fontsource/alexandria/700.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/700.css';
import '@fontsource/cormorant-garamond/400.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import './i18n';
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/natural-beauty-center">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

