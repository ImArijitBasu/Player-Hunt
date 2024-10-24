import React from "react";
import logo from '../../assets/logo.png'
const Selected = () => {
  return (
    <div>
      <div className="border flex justify-between items-center rounded-2xl p-2 my-8">
        <div className="flex items-center">
          <img className="w-20 h-20 object-cover" src={logo} alt="" />
          <div className="">
            <p className="text-lg font-bold">Name</p>
            <p className="">Type</p>
          </div>
        </div>
        <div className="">
          <div className="btn">
            <i className="fa-solid fa-trash text-red-600 "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selected;
