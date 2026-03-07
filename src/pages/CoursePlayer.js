import { useParams } from "react-router-dom";

function CoursePlayer() {

  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>

      <h1>Course Player</h1>

      <p>Playing Course ID: {id}</p>

      <div style={styles.video}>
        Video Player Placeholder
      </div>

      <h3>Lessons</h3>

      <ul>
        <li>Introduction</li>
        <li>Lesson 1</li>
        <li>Lesson 2</li>
        <li>Lesson 3</li>
      </ul>

    </div>
  );
}

const styles = {
  video: {
    width: "600px",
    height: "300px",
    background: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px"
  }
};

export default CoursePlayer;