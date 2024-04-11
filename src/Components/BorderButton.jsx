import React from "react";

const BorderButton = ({ text }) => {
  return (
    <div className="cursor-pointer font-serif w-full justify-center flex gap-x-4 items-center border-2 border-white text-white px-3 py-3.5 font-medium hover:bg-white hover:text-black transition-all rounded-[3px] text-sm ">
      <span className="font-serif text-[1rem]">{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-6 fill-current"
      >
        <path
          fill-rule="evenodd"
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default BorderButton;
