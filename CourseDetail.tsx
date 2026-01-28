import { ChevronLeft, Home } from 'lucide-react';

export function CourseDetail() {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto">
      {/* Header */}
      <div className="bg-[#990000] text-white p-4 flex items-center justify-between">
        <ChevronLeft className="w-6 h-6" />
        <h1 className="flex-1 text-center">NETS 1500</h1>
        <Home className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Course Title */}
        <div className="mb-6">
          <h2 className="text-xl mb-2">NETS 1500</h2>
          <p className="text-gray-600">Swapneel Sheth</p>
        </div>

        {/* Ratings Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Course Quality:</span>
              <span className="font-semibold">3.2</span>
            </div>
            <div className="flex justify-between">
              <span>Course Difficulty:</span>
              <span className="font-semibold">1.8</span>
            </div>
            <div className="flex justify-between">
              <span>Instructor Quality:</span>
              <span className="font-semibold">3.5</span>
            </div>
            <div className="flex justify-between">
              <span>Work Required:</span>
              <span className="font-semibold">2.1</span>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="mb-6">
          <h3 className="mb-3">Course Description:</h3>
          <p className="text-gray-700 leading-relaxed">
            Want to understand the sociological and algorithmic aspects of friend recommendation? Want to know how Google decides what 10 answers to return, out of the 10 million matching results? Want to understand how search engines have revolutionized advertising? Then this is the course for you! NETS 150 provides an overview of the issues, theoretical foundations, and existing techniques in networks (social, information, communication) and markets on the Internet. Subsequent NETS courses are available for students wishing to explore any of these topics in greater detail.
          </p>
        </div>

        {/* Schedule */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <div className="mb-2">Schedule:</div>
          <div className="font-semibold">12pm-1:29pm in TOWN 100 (1/14 to 4/29)</div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
            Drop
          </button>
          <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
            Add
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 text-center py-4 border-t border-gray-300">
        <span className="text-gray-700">Path@Penn</span>
      </div>
    </div>
  );
}