import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2>LMS Platform</h2>
      <div style={styles.links}>
        <Link to="/">Home</Link> |
        <Link to="/my-courses">My Courses</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#282c34",
    color: "white",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
};

export default Navbar;