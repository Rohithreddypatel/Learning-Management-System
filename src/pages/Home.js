import { useEffect, useState } from "react";
import { fetchCourses } from "../services/api";
import CourseCard from "../components/CourseCard";

function Home() {

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
      setLoading(false);
    };

    loadCourses();

  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>

      <h1>Available Courses</h1>

      <input
        type="text"
        placeholder="Search courses"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "250px" }}
      />

      {loading ? (
        <p>Loading courses</p>
      ) : (
        <div style={styles.grid}>
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

    </div>
  );
}

const styles = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default Home;