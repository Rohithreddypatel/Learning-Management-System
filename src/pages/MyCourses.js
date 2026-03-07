import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyCourses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    const enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setCourses(enrolled);

  }, []);

  if (courses.length === 0) {
    return <h2>No enrolled courses</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>My Courses</h1>

      {courses.map(course => (
        <div key={course.id} style={styles.card}>

          <img src={course.thumbnail} width="200" alt={course.title} />

          <h3>{course.title}</h3>

          <p>{course.description.substring(0, 100)}...</p>

          <Link to={`/player/${course.id}`}>
            <button>Start Course</button>
          </Link>

        </div>
      ))}

    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "10px"
  }
};

export default MyCourses;