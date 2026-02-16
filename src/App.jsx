// import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import Signup from "./pages/signup";
import StudentDashboard from "./pages/StudentDashboard"
import TeacherDashboard from "./pages/TeacherDashboard"
import Createcourse from "./pages/createcourse"
import Profile from "./pages/profile"
import ManageUploads from "./pages/manageuploads"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/course" element={<Createcourse />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manage-uploads" element={<ManageUploads />} />
      </Routes>
    </BrowserRouter>
  );
}
