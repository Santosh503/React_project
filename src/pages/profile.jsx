import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <div className="flex bg-slate-50 min-h-screen text-slate-900">
      <Sidebar role="student" />

      <div className="flex-1 p-6">
        <div className="mb-6">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-sky-700 text-white p-6 shadow">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                  SN
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-200">Student Profile</p>
                  <h1 className="text-3xl font-bold">Student Name</h1>
                  <p className="text-sm text-blue-100">student@example.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-white/15 hover:bg-white/25 transition">
                  Edit Profile
                </button>
                <button className="px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-blue-50 transition">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 xl:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Account Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500 mb-1">Full Name</p>
                <p className="text-lg font-semibold">Student Name</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="text-lg font-semibold">student@example.com</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Role</p>
                <p className="text-lg font-semibold">Student</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Department</p>
                <p className="text-lg font-semibold">Computer Science</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Enrollment Year</p>
                <p className="text-lg font-semibold">2023</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Student ID</p>
                <p className="text-lg font-semibold">KU-2023-017</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold mb-4">Highlights</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">Active Courses</p>
                  <p className="text-lg font-semibold">4</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">Notes Downloaded</p>
                  <p className="text-lg font-semibold">18</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">Last Login</p>
                  <p className="text-lg font-semibold">Today</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold mb-4">Contact</h2>
              <div className="space-y-3 text-sm text-slate-600">
                <p>Phone: +977 9800000000</p>
                <p>Office: CSE Block, Room 2-12</p>
                <p>Advisor: Dr. K. Sharma</p>
              </div>
              <button className="mt-5 w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Message Advisor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
