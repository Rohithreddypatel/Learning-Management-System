import { useParams } from "react-router-dom";

function CourseDetails() {

  const { id } = useParams();

  return (
    <div>
      <h1>Course Details</h1>
      <p>Course ID: {id}</p>
    </div>
  );
}

export default CourseDetails;