import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// , term, setTerm
const SreachBar = ({ onSreachUserInput }) => {
  const [userInput, setUserInput] = useState("");
  const history = useHistory();
  const onSubmit = (e) => {
    // e.preventDefault();
    onSreachUserInput(userInput);
    e.preventDefault();
    history.push(`/${userInput}`);
    // our parent component is told  what current sreach form is
  };

  return (
    <div className="     overflow-y-auto flex flex-col   static  lg:max-h-full  max-h-screen w-full  ">
      <div className="absolute   px-10 py-10  -mt-8 overflow-auto -left-9 sm:left-auto sm:right-16 lg:right-2 flex flex-col   center place-content-center self-center  top-0    max-h-screen   ">
        <div class="relative w-40   border-t border-gray-100 rounded-2xl    self-center bg-white shadow-xl" id="search-content">
          <div class="container mx-auto py-1 text-black">
            <form onSubmit={onSubmit}>
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                id="searchfield"
                type="search"
                name="search"
                placeholder="Search..."
                autofocus="autofocus"
                class="w-36 ml-2 overlfow-hidden text-grey-800 transition focus:outline-none focus:border-transparent p-1 appearance-none leading-normal text-sm "
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SreachBar;
