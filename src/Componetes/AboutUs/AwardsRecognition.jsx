export default function AwardsRecognition() {
  return (
    <div className="bg-gray-50  py-16 px-6 flex items-center justify-center">
      <div className="flex w-10/12 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col w-1/3 pl-6 pt-24">
          <div className="flex items-center mb-3">
            {/* Star icon */}
            <svg className="text-green-500 mr-2" width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.56 7.82 20 9 12.91 4 9.27l5.91-.91L12 2z"
                fill="currentColor"
              />
            </svg>
            <span className="text-green-500 uppercase tracking-wide text-sm font-medium">Awards</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight text-black mb-2">Awards &</h1>
          <h1 className="text-5xl font-bold leading-tight text-black">Recognition</h1>
        </div>
        {/* Right Section */}
        <div className="flex-1 pt-24">
          <ul className="divide-y divide-gray-200">
            <li className="flex justify-between py-5">
              <span className="text-base font-medium text-black">Star Performer of the Year</span>
              <span className="text-sm text-gray-500 font-medium">MAY 2021</span>
            </li>
            <li className="flex justify-between py-5">
              <span className="text-base font-medium text-black">Best Beginner Hack</span>
              <span className="text-sm text-gray-500 font-medium">APR 2021</span>
            </li>
            <li className="flex justify-between py-5">
              <span className="text-base font-medium text-black">Sketch Webpage Contest Winner</span>
              <span className="text-sm text-gray-500 font-medium">NOV 2020</span>
            </li>
            <li className="flex justify-between py-5">
              <span className="text-base font-medium text-black">Best Space App Winner</span>
              <span className="text-sm text-gray-500 font-medium">SEP 2021</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
