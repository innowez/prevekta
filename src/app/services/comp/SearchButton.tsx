import React from "react";

function SearchButton() {
  return (
    <div className="relative border border-primary rounded-full px-4 py-2 flex justify-between items-center max-w-[705px] w-full">
      <input type="text" className="w-full placeholder:text-[rgba(19, 45, 71, 0.4)] placeholder:font-[Duplet] font-[Duplet] text-primary" placeholder="Search Ayurvedic services..." />
      <button className="cursor-pointer ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#132D47"
            stroke="#132D47"
            strokeWidth="0.5"
            d="M19.143 19.5a.36.36 0 0 1-.253-.105l-4.107-4.107a6.15 6.15 0 0 1-4.105 1.567A6.185 6.185 0 0 1 4.5 10.678 6.185 6.185 0 0 1 10.678 4.5a6.185 6.185 0 0 1 6.177 6.178 6.15 6.15 0 0 1-1.567 4.105l4.107 4.107a.357.357 0 0 1-.252.61ZM10.678 5.214a5.47 5.47 0 0 0-5.464 5.464 5.47 5.47 0 0 0 5.464 5.463 5.47 5.47 0 0 0 5.463-5.463 5.47 5.47 0 0 0-5.463-5.464Z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SearchButton;
