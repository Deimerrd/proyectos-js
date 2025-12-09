function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="titulo">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>

      <div className="divider"></div>

      <div className="toggle">
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
  );
}

export default Navbar;
