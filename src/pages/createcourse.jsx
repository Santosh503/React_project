import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { Book, Upload, Users, Download, Save } from "lucide-react";

export default function Createcourse() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar role="teacher" />

      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Create Course</h1>
        </div>

        {/* Create Course Form */}
        <div className="bg-white p-8 rounded-xl shadow max-w-5xl">
          <h2 className="text-xl font-bold mb-6">Course Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Course Title
              </label>
              <input
                type="text"
                placeholder="e.g. Introduction to Web Engineering"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Course Code */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Course Code
              </label>
              <input
                type="text"
                placeholder="WEB101"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Category
              </label>
              <select className="w-full border rounded-lg px-4 py-2">
                <option>Select Category</option>
                <option>Web Engineering</option>
                <option>Software Engineering</option>
                <option>Computer Science</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Course Description
              </label>
              <textarea
                rows="4"
                placeholder="Describe what students will learn..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Duration (Weeks)
              </label>
              <input
                type="number"
                placeholder="12"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* Level */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Level
              </label>
              <select className="w-full border rounded-lg px-4 py-2">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* Thumbnail Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Course Thumbnail
              </label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <Upload className="mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">
                  Upload course cover image
                </p>
                <input type="file" className="mt-3" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-8">
            <button className="px-5 py-2 rounded-lg border">
              Cancel
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg">
              <Save size={18} />
              Create Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
