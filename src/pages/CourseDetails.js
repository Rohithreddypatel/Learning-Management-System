import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseById } from "../services/api";

function CourseDetails() {

  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {

    const loadCourse = async () => {
      const data = await fetchCourseById(id);
      setCourse(data);
    };

    loadCourse();

  }, [id]);

  const enrollCourse = () => {

    const enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    const exists = enrolled.find(c => c.id === course.id);

    if (exists) {
      alert("Already enrolled in this course");
      return;
    }

    enrolled.push(course);

    localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));

    alert("Successfully enrolled!");
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>

      <h1>{course.title}</h1>

      <img
        src={course.thumbnail}
        alt={course.title}
        width="300"
      />

      <p><strong>Instructor:</strong> {course.instructor}</p>

      <p><strong>Duration:</strong> {course.duration}</p>

      <p>{course.description}</p>

      <button onClick={enrollCourse}>
        Enroll Course
      </button>

    </div>
  );
}

export default CourseDetails;