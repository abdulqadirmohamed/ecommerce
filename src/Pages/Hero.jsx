import React from "react";
import image from '../images/Img.png'

const Hero = () => {
  return (
    <div className="w-[75%] mx-auto text-[#0E2217] flex mt-10">
      {/* Text */}
      <div>
        <h1 className="text-[60px] font-bold">
          Providing The
          <br />
          Fastest
          <span className="text-red">
            {" "}
            Food <br /> Delivery
          </span>
        </h1>
        <p className="text-2xl">
          How commited are you to making the necessary changes to reach your
          goals
        </p>
        <div className="flex items-center mt-5">
          <button className="text-[#EEF6F3] px-4 py-2 rounded-md bg-[#F9543F]  hover:bg-[#ff4b33] ">Get Started</button>
          <button className="btn text-red ml-4 flex">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            How to Order
          </button>
        </div>
        {/* info */}
        <div className="mt-10 flex gap-4 text-center p-4 rounded shadow-lg">
            <div>
                <h2 className="font-bold">Lunch</h2>
                <p>12:00PM - 02:00PM</p>
            </div>
            <div className="w-2 border-t border-gray-300"></div>
            <div>
                <h2 className="font-bold">Dinner</h2>
                <p>05:00PM - 09:00PM</p>
            </div>
        </div>
      </div>
      {/* Image */}
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
