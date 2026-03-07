import axios from "axios";

const API_URL = "http://localhost:3001/courses";

export const fetchCourses = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchCourseById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};