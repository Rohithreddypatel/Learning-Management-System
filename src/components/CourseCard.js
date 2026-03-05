import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div style={styles.card}>
      <img src={course.thumbnail} alt={course.title} style={styles.image} />

      <h3>{course.title}</h3>

      <p>{course.description.substring(0, 80)}...</p>

      <Link to={`/course/${course.id}`}>
        <button>View Course</button>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
};

export default CourseCard;