import React from "react";

const Shimmer = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-dvh">
      <div className="container mx-auto animate-pulse">
        {/* Nav Shimmer Start */}
        <div className="flex items-center justify-between py-4 w-full gap-4">
          <h1 className="w-80 h-12 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
          <div className="w-96 h-12 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
        </div>
        {/* Nav Shimmer End */}

        <div className="grid grid-cols-1 grid-rows-3 h-full gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Card 1 */}
          <div className="w-full row-span-2">
            <div className="flex flex-col justify-between p-6 w-full h-full bg-gray-300 rounded-lg dark:bg-gray-600">
              <div className="flex flex-col gap-8">
                <p className="w-24 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
                <p className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              </div>
              <div className="flex items-center justify-center">
                <p className="w-48 h-32 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              </div>
              <div className="flex flex-col gap-8">
                <p className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
                <p className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full ">
            <div className="flex flex-col justify-between p-6 w-full h-56 bg-gray-300 rounded-lg dark:bg-gray-600">
              <h1 className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></h1>
              <p className="w-24 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              <p className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full ">
            <div className="flex flex-col justify-between p-6 w-full h-56 bg-gray-300 rounded-lg dark:bg-gray-600">
              <h1 className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></h1>
              <p className="w-24 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              <p className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full ">
            <div className="flex flex-col justify-between p-6 w-full h-56 bg-gray-300 rounded-lg dark:bg-gray-600">
              <h1 className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></h1>
              <p className="w-24 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              <p className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="w-full ">
            <div className="flex flex-col justify-between p-6 w-full h-56 bg-gray-300 rounded-lg dark:bg-gray-600">
              <h1 className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></h1>
              <p className="w-24 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              <p className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="w-full ">
            <div className="flex flex-col justify-between p-6 w-full h-56 bg-gray-300 rounded-lg dark:bg-gray-600">
              <h1 className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></h1>
              <p className="w-24 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              <p className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="w-full ">
            <div className="flex flex-col justify-between p-6 w-full h-56 bg-gray-300 rounded-lg dark:bg-gray-600">
              <h1 className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></h1>
              <p className="w-24 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
              <p className="w-56 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shimmer;
