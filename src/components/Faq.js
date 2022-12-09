import React, { useState } from "react";

const Faq = ({ question, answer, index, toggle, open }) => {
  return (
    <div
      className={`bg-white   ${
        open ? "h-full" : "h-[2rem]"
      }   flex flex-col items-center  justify-center`}
      onClick={() => toggle(index)}
    >
      <div className="relative z-10 flex items-center justify-between bg-white h-full">
        <p className="font-bold">{question}</p>
        <div className="bg-blue-500 px-2">+</div>
      </div>
      <div className={`   ${open ? "h-full" : "h-0"}   overflow-hidden `}>
        <div
          className={`  ${
            open
              ? "max-h-full duration-500 ease-in-out after:max-h-[55px]"
              : "max-h-0 duration-[200ms] ease-out"
          }`}
        >
          <div
            className={`${
              open
                ? "translate-y-0 duration-[200ms] ease-in-out "
                : "-translate-y-20  duration-200 ease-in-out"
            }`}
          >
            <p className="text-gray-400 pt-2 duration-300">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
