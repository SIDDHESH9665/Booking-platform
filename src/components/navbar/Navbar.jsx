import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ReserveStay</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;