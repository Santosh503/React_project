import Sidebar from "../components/Sidebar";

export default function ManageUploads() {
  const recentUploads = [
    {
      title: "Web Engineering - Unit 1.pdf",
      course: "Web Engineering",
      date: "Feb 12, 2026",
    },
    {
      title: "Software Engineering - UML.pptx",
      course: "Software Engineering",
      date: "Feb 08, 2026",
    },
    {
      title: "Database Notes.docx",
      course: "Database Systems",
      date: "Feb 02, 2026",
    },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar role="teacher" />

      <div className="flex-1 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Manage Uploads</h1>
            <p className="text-sm text-gray-500">
              Upload course materials and manage recent files.
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Upload New
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
            <h2 className="text-lg font-bold mb-4">Upload Material</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Course
                </label>
                <select className="w-full border rounded-lg p-2">
                  <option>Select Course</option>
                  <option>Web Engineering</option>
                  <option>Software Engineering</option>
                  <option>Database Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Material Type
                </label>
                <select className="w-full border rounded-lg p-2">
                  <option>Lecture Notes</option>
                  <option>Slides</option>
                  <option>Assignment</option>
                  <option>Video</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                File Upload
              </label>
              <input type="file" className="w-full border rounded-lg p-2" />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Notes
              </label>
              <textarea
                className="w-full border rounded-lg p-2"
                rows="4"
                placeholder="Add a short description for students."
              />
            </div>

            <div className="mt-5 flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Publish
              </button>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
                Save Draft
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4">Upload Tips</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Keep file names short and descriptive.</li>
              <li>Group materials by week or unit.</li>
              <li>Preferred formats: PDF, PPTX, DOCX, MP4.</li>
              <li>Include brief notes for context.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <h2 className="text-lg font-bold mb-4">Recent Uploads</h2>
          <div className="space-y-3">
            {recentUploads.map((item) => (
              <div
                key={item.title}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b pb-3"
              >
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.course} - {item.date}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700">
                    Edit
                  </button>
                  <button className="px-3 py-1 rounded-md bg-red-100 text-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
