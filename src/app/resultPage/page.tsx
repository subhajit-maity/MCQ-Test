import exp from "constants";
import React from "react";

const ResultPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 w-full">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Results
      </h1>
      <div className="flex flex-col justify-center items-center my-10 md:w-3/6 ml-2 mr-2 border-2 rounded-lg p-4 border-gray-800">
        <div className=" flex flex-col justify-center items-center mb-10 ">
          <h2 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Your Score: 5/10
          </h2>
        </div>
        <div className="flex flex-row justify-center items-center w-full mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Total Questions: 10
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Attempted Questions: 8
          </button>
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Correct Answers: 5
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Wrong Answers: 3
          </button>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 ml-2 mr-2 ">
        Review Questions
      </button>
    </div>
  );
};

export default ResultPage;
