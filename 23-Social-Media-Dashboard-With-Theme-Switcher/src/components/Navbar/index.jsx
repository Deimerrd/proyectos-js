const Navbar = () => {
  return (
    <div className="content">
      <nav
        className="nav"
        style={{ backgroundColor: "#f7f9ff", color: "#1d1f29" }}
      >
        <h1 className="nav__title">Social Media Dashboard</h1>
        <p className="nav__subtitle">Total Followers: 23,004</p>

        <hr className="divider" />
        <div className="dark-mode-toggle">
          <label>Dark Mode</label>
          <input type="checkbox" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
