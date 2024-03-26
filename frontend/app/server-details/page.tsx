import React from "react";

const ServerDetailsPage = () => {
  return (
    <section className="bg-gray-900 h-screen p-2">
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-0 bg-red-500 w-40">
          <div className="h-4 w-4 rounded-full bg-green-500 flex justify-center items-center">
            <svg
              className="h-3 w-3 text-white mt-[3px]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M15.293 4.293a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 12.586l6.293-6.293a1 1 0 0 1 1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          example.com
        </div>

        <span>99% Uptime</span>
      </div>
      <div className="flex gap-[3px]">
        {Array(90)
          .fill(1)
          .map((i: number) => (
            <div key={i} className="bg-green-500 w-2 h-11 rounded-sm "></div>
          ))}
      </div>
    </section>
  );
};

export default ServerDetailsPage;
