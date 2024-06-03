"use client";

import { PiMoneyBold } from "react-icons/pi";
import DateDisplay from "./DateDisplay";
import { SlCalender } from "react-icons/sl";
import { IoMdPeople } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";
import { MdOutlineContentCopy } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const url = "https://amazonclone-hera.vercel.app/";
  //  for copy the site link
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // alert("Link copied to clipboard!");
        toast.success("Site link is copied successfully");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div className=" w-full flex flex-col items-center justify-center ">
      <div className=" w-[90%] md:w-[80%] ">
        <DateDisplay />
        <p className=" text-2xl font-semibold text-gray-500">
          Hello, Didar Shop
        </p>
      </div>
      <div className=" w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-3 border border-gray-400 rounded-md my-3 shadow-md">
        <div className=" border border-gray-400 flex items-center justify-between px-4 py-2 ">
          <div>
            <p>Sales Today</p>
            <p className=" text-3xl font-semibold">BDT 0</p>
          </div>
          <div>
            <PiMoneyBold className=" text-4xl text-purple-600" />
          </div>
        </div>
        <div className="border border-gray-400 flex items-center justify-between px-4 py-2 ">
          <div>
            <p>Sales Monthly</p>
            <p className=" text-3xl font-semibold">BDT 0</p>
          </div>
          <div>
            <SlCalender className=" text-3xl text-purple-600" />
          </div>
        </div>
        <div className="border border-gray-400 flex items-center justify-between px-4 py-2">
          <div>
            <p>Website visits</p>
            <p className=" text-3xl font-semibold">0</p>
          </div>
          <div>
            <IoMdPeople className=" text-4xl text-purple-600" />
          </div>
        </div>
      </div>

      {/* file input upload section start */}
      <div className=" w-[90%] md:w-[80%]  grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2">
        <div className=" border border-gray-500 rounded-md flex flex-col items-center justify-center gap-y-2 px-20 py-10">
          <div>
            <GoPlusCircle className=" text-6xl text-gray-400" />
          </div>
          <p className=" text-purple-600 text-sm md:text-[18px]">
            Add product in your shop
          </p>
        </div>
        <div className=" border border-gray-500 rounded-md flex flex-col items-center justify-center gap-y-2 px-20 py-10">
          <div className=" flex flex-col items-center justify-center">
            <p>Shop Detail</p>
            <p className=" text-xl font-semibold text-gray-600">Didar Shop</p>
          </div>
          <div className=" flex items-center justify-center gap-x-3 bg-slate-200 px-3 py-1 rounded-md">
            <p>{url}</p>
            <div>
              <MdOutlineContentCopy
                onClick={copyToClipboard}
                className=" text-2xl text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Dashboard;
