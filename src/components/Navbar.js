import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Navbar() {

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <nav style={styles.navbar}>

      <h2>LMS Platform</h2>

      <div style={styles.links}>

        <Link to="/">Home</Link>

        {user && <Link to="/my-courses">My Courses</Link>}

        {!user && <Link to="/login">Login</Link>}

        {!user && <Link to="/signup">Signup</Link>}

        {user && (
          <button onClick={logout}>
            Logout
          </button>
        )}

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
    color: "white"
  },
  links: {
    display: "flex",
    gap: "20px"
  }
};

export default Navbar;