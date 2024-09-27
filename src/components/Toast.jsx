import React, { useState, useEffect } from "react";

const IconX = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

function InstructionCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size on component mount
    const mediaQuery = window.matchMedia("(max-width: 950px)");
    setIsMobile(mediaQuery.matches);

    // Add event listener to handle screen size change
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-10 right-10 w-80 bg-[#0a0a0f] border border-purple-500 text-white rounded-lg shadow-lg shadow-purple-500/20 z-50 overflow-hidden transition-all duration-500 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center justify-between p-4 pb-2">
        <h3 className="text-lg font-bold text-purple-400">Instructions</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 p-1 rounded-full transition-colors duration-200"
        >
          <IconX className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <div className="p-8 pt-4">
        <div className="space-y-2">
          {isMobile ? (
            <div className="text-sm">Spin the 3D objects!</div>
          ) : (
            <>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-purple-400"
                >
                  <path d="m9 9 5 12 1.774-5.226L21 14 9 9z" />
                  <path d="m16.071 16.071 4.243 4.243" />
                  <path d="m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.657-2.12 2.122" />
                </svg>
                <p className="text-sm">Left click - to spin 3D objects</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-purple-400"
                >
                  <path d="m5 3-3 3" />
                  <path d="m19 3 3 3" />
                  <path d="m5 21-3-3" />
                  <path d="m19 21 3-3" />
                  <path d="M9 3v2" />
                  <path d="M9 19v2" />
                  <path d="M15 3v2" />
                  <path d="M15 19v2" />
                  <path d="M3 9h2" />
                  <path d="M19 9h2" />
                  <path d="M3 15h2" />
                  <path d="M19 15h2" />
                  <path d="M9 10v5h5" />
                  <path d="m9 15 5-5" />
                </svg>
                <p className="text-sm">Right click - to drag 3D objects</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default InstructionCard;
