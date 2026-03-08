import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {

    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Signup</h2>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input type="password" placeholder="Password" />

        <br /><br />

        <button type="submit">Signup</button>

      </form>

    </div>
  );
}

export default Signup;