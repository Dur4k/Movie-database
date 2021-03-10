import React from "react";

const Sidebar_button = ({ active, setActive }) => {
  return (
    <button
      onClick={() => setActive(!active)}
      type="button"
      class="visible bg-transparent fixed z-50 top-4 right-4 w-20 h-6 rounded-lg  border-gray-900 focus:outline-none bg-gray-200 text-black block lg:hidden "
    >
      <span class="sr-only">Open site navigation</span>

      <svg
        width="24"
        height="24"
        fill="none"
        class={`h-5 absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform ${active ? "" : "opacity-0 scale-80"}`}
      >
        <path d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <svg
        width="24"
        height="24"
        fill="none"
        class={` absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform ${active ? "opacity-0 scale-80" : ""}`}
      >
        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
  );
};

export default Sidebar_button;
