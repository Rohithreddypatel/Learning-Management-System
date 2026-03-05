import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>

      <h2>LMS Platform</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/my-courses" style={styles.link}>My Courses</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#1f2937",
    color: "white",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;