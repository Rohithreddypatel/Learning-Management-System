import { useParams } from "react-router-dom";

function CoursePlayer() {

  const { id } = useParams();

  return (
    <div>
      <h1>Course Player</h1>
      <p>Playing course {id}</p>
    </div>
  );
}

export default CoursePlayer;