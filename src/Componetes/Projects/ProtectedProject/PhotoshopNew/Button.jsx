import { X } from "lucide-react";
import React, { useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Data from "./Data";
import { TfiClose } from "react-icons/tfi";

const Button = ({ menuitems, filteritems, setitem }) => {
  const modalRef = useRef();
  console.log(Data);

  const [show, setshow] = useState(false);
  return (
    <>
      <CiMenuFries 
      color="#8f44fd"
        className=" responsive-toggle-btn mt-10 ml-20 fixed rounded-none "
        onClick={() => setshow(true)}
        size={30}
      />
      {show && (
        <div className=" resposive-sidebar flex gap-12 max-w-4xl font-[sans-serif]    md:w-auto bg- w-64 h-screen fixed rounded-none border-none ">
          <div>
            <div className="min-w-[230px] bg-cardcolor inline-block py-5 md:block md:w-auto">
              <div className="tab flex items-center text-sm text-white hover:text-blue-600 py-5 px-5 cursor-pointer transition-all">
                <X onClick={() => setshow(false)} className="w-[18px] mr-4 " />
                <span onClick={() => setshow(false)}>Close Menu</span>
              </div>
<hr />
              {menuitems.map((val) => (
                <button
             
                  className="tab flex items-center  text-sm text-white hover:text-textOne py-5 px-5 cursor-pointer transition-all active:bg-red-100"
                >
                    <input
                      onClick={() => filteritems(val)}
                      id="default-checkbox"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 text-blue-600 cursor-pointer bg-textOne border-textOne rounded focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-medium  0"
                    >
                      {val}
                    </label>
                 
                </button>
              ))}

              <button
              onClick={() => setitem(Data)}
            
                className="tab flex items-center text-sm text-gray-800 hover:text-blue-600 py-5 px-5 cursor-pointer transition-all"
              >
                <input
                     onClick={() => setitem(Data)}
                      id="default-checkbox"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-medium  text-textOne"
                    >
                      Reset
                    </label>
              </button>
            </div>
          </div>

          <div></div>
        </div>
      )}
    </>
  );
};

export default Button;
