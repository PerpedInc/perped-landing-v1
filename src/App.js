import "./App.css";
import "./fonts.css";

import { useEffect, useState } from "react";

import LandingLayout from "./components/layouts/LandingLayout";

function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    // Check if the font is loaded
    document.fonts.ready.then(() => {
      setIsFontLoaded(true);
    });
  }, []);

  return <>{isFontLoaded ? <LandingLayout /> : null}</>;
}

export default App;
