import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Views from "./views";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from "./configs/AppConfig";

//test
import ClientSide from "./views/client-views";
import ClientLayout from "layouts/client-layout";

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
        <ThemeSwitcherProvider
          themeMap={themes}
          defaultTheme={THEME_CONFIG.currentTheme}
          insertionPoint="styles-insertion-point"
        >
          <Router>
            <Routes>
              <Route path="/*" element={<ClientSide />} />
            </Routes>
          </Router>
        </ThemeSwitcherProvider>
      </Provider> */}
      <Router>
        <Routes>
          {/* <Route path="/*" element={<ClientSide />} /> */}
          <Route path="/*" element={<ClientLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
