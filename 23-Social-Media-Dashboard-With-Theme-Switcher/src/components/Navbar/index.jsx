import { useState, useEffect } from "react";
import "./Navbar.css"; // Asegúrate de que este archivo tenga los estilos que te muestro abajo

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="content">
      <nav className="nav">
        <div>
          <h1 className="nav__title">Social Media Dashboard</h1>
          <p className="nav__subtitle">Total Followers: 23,004</p>
        </div>

        <hr className="divider" />

        <div className="dark-mode-toggle">
          <span>Dark Mode</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
