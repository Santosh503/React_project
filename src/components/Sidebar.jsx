import { Link } from "react-router-dom";
import { LayoutDashboard, BookOpen, Upload, Download, User } from "lucide-react";

export default function Sidebar({ role }) {
  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">LMS</h1>

      <ul className="space-y-4">
        <li>
          <Link
            to={role === "teacher" ? "/teacher-dashboard" : "/student-dashboard"}
            className="flex items-center gap-3 bg-blue-600 px-4 py-2 rounded-lg"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/course"
            className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg"
          >
            <BookOpen size={18} />
            My Courses
          </Link>
        </li>

        {/* Teacher only */}
        {role === "teacher" && (
          <li>
            <Link
              to="/manage-uploads"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg"
            >
              <Upload size={18} />
              Manage Uploads
            </Link>
          </li>
        )}

        {/* Student only */}
        {role === "student" && (
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
            <Download size={18} />
            Downloads
          </li>
        )}

        <li>
          <Link
            to="/profile"
            className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg"
          >
            <User size={18} />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
