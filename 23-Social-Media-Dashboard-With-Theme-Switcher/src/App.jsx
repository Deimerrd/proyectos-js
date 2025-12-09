import { useState, useEffect } from "react";
import Navbar from "./componenst/Navbar";

function App() {
  // MODO OSCURO PREDETERMINADO
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default App;
