import axios from "axios";

export const fetchCourses = async () => {
  const res = await axios.get("http://localhost:3001/courses");
  return res.data;
};