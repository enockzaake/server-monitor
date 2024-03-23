"use client";

import Link from "next/link";

const ServerList = () => {
  return (
    <div className="container flex flex-col p-2 sm:p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold text-gray-200">All servers</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[1300px] text-xs mx-auto">
          <div className="bg-gray-300 grid grid-cols-6 rounded-t-lg  pl-[80px]">
            <div className="p-3 font-semibold">Server name</div>
            <div className="p-3 font-semibold">Client</div>
            <div className="p-3 font-semibold">Issued</div>
            <div className="p-3 font-semibold">Due</div>
            <div className="p-3 font-semibold">Amount</div>
            <div className="p-3 font-semibold">Status</div>
          </div>
          {Array(10)
            .fill(1)
            .map((i, j) => (
              <div
                className="border-b border-opacity-20 border-gray-300 bg-gray-50 hover:bg-gray-200 transition-colors"
                key={j}
              >
                <Link href={"/server-details"}>
                  <div className="grid grid-cols-6 ml-[80px]">
                    <div className="p-3">Social media app</div>
                    <div className="p-3">Microsoft Corporation</div>
                    <div className="p-3">
                      14 Jan 2022
                      <br />
                      <span className="text-gray-600">Friday</span>
                    </div>
                    <div className="p-3">
                      01 Feb 2022
                      <br />
                      <span className="text-gray-600">Tuesday</span>
                    </div>
                    <div className="p-3">$15,792</div>
                    <div className="p-3">
                      <span className="px-3 py-1 font-semibold rounded-md text-gray-50 bg-blue-600">
                        <span>Pending</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServerList;
