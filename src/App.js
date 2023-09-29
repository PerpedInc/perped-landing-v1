import "./App.css";
import "./fonts.css";

import { useEffect, useState } from "react";

import LandingLayout from "./components/layouts/LandingLayout";

// Wait for the font to load before showing the text
const FontWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setIsVisible(true));
  }, []);

  return (
    <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
      {children}
    </div>
  );
};

function App() {
  return (
    <>
      <FontWrapper>
        <LandingLayout />
      </FontWrapper>
    </>
  );
}
export default App;
