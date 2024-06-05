"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { FaAngleDown, FaLayerGroup } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { GrSettingsOption } from "react-icons/gr";
import { IoIosArrowForward, IoMdMenu } from "react-icons/io";
import { IoListSharp } from "react-icons/io5";
import {
  MdAccountCircle,
  MdOutlineCancel,
  MdOutlineDashboard,
} from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { SiHiveBlockchain } from "react-icons/si";
import { VscAccount } from "react-icons/vsc";

const MainMenu = () => {
  const [sideBar, setSideBar] = useState(true);
  const [account, setAccount] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target as Node)
      ) {
        setAccount(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [accountMenuRef]);
  return (
    <div className=" w-full  flex ">
      {sideBar && (
        <div className=" w-[45%] md:w-[17%] bg-[#F3F4F6] min-h-screen fixed  z-50 ">
          {/* logo section work start */}

          <div className="  w-full flex flex-col items-center relative px-1">
            <MdOutlineCancel
              onClick={() => setSideBar(false)}
              className=" text-gray-600 cursor-pointer text-2xl absolute right-3 top-2"
            />
            <Link href={"/"}>
              <p className=" text-purple-600 font-semibold text-xl mt-8">
                HeraEasy
              </p>
            </Link>
            <div>
              <div className=" mt-5 flex flex-col gap-y-2">
                <Link
                  href={"/"}
                  className=" flex items-center gap-x-2 text-gray-600 font-semibold px-5 py-1 rounded-md bg-white "
                >
                  <MdOutlineDashboard className=" text-xl" />
                  Dashboard
                </Link>
                <Link
                  href={"/inventory/new"}
                  onClick={() => setShowShop(!showShop)}
                  className=" cursor-pointer   flex items-center gap-x-2 text-gray-600 font-semibold px-5 py-1 rounded-md bg-white "
                >
                  <GrSettingsOption className=" text-2xl" />
                  Manage Shop{" "}
                  <span>
                    {showShop ? <FaAngleDown /> : <IoIosArrowForward />}
                  </span>
                </Link>
                {showShop && (
                  <div className=" ">
                    <p className="  text-gray-600 font-semibold px-5 py-1 rounded-md bg-white ">
                      Shop Basic Info
                    </p>
                    <p className="  text-gray-600 font-semibold px-5 py-1 rounded-md bg-white ">
                      Shop Settings
                    </p>
                    <p className="  text-gray-600 font-semibold px-5 py-1 rounded-md bg-white ">
                      Social Links
                    </p>
                    <p className="  text-gray-600 font-semibold px-5 py-1 rounded-md bg-white ">
                      Customize theme
                    </p>
                  </div>
                )}
                <p className=" flex items-center gap-x-2 text-gray-600 font-semibold px-5 py-1 rounded-md bg-white ">
                  <AiOutlineShop className=" text-xl" />
                  Inventory
                </p>
                <p className=" flex items-center gap-x-2 text-gray-600 font-semibold px-5 py-1 rounded-md bg-white ">
                  <FaLayerGroup className=" text-xl" />
                  Categories
                </p>
                <p className=" flex items-center gap-x-2 text-gray-600 font-semibold px-5 py-1 rounded-md bg-white ">
                  <IoListSharp className=" text-xl" />
                  Orders
                </p>
                <p className=" flex items-center gap-x-2 text-gray-600 font-semibold px-5 py-1 rounded-md bg-white ">
                  <GoGraph className=" text-xl" />
                  Reports
                </p>
                <p className=" flex items-center gap-x-2 text-gray-600 font-semibold px-5 py-1 rounded-md bg-white ">
                  <VscAccount className=" text-xl" />
                  Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className=" w-full px-10 h-16 border-b border-gray-200 flex items-center justify-between">
        {!sideBar && (
          <div>
            <IoMdMenu
              onClick={() => setSideBar(true)}
              className=" text-gray-600 cursor-pointer text-2xl "
            />
          </div>
        )}

        <div className=" flex items-center justify-end gap-x-2  w-full">
          <div className=" relative">
            <BsCart2 className=" text-2xl text-gray-600" />
            <div className=" py-[1px] px-[5px] rounded-full bg-purple-600 text-white flex items-center justify-center absolute bottom-5 left-1 animate-bounce">
              <p className=" text-xs">0</p>
            </div>
          </div>
          <div className=" relative" ref={accountMenuRef}>
            <MdAccountCircle
              onClick={() => setAccount(!account)}
              className=" text-5xl text-gray-300 cursor-pointer"
            />
            {account && (
              <div className=" absolute z-40 top-[52px] right-2 bg-white h-20 px-6 flex items-center justify-center border border-gray-300 rounded-md shadow-md">
                <div className=" flex flex-col items-center justify-center gap-y-1">
                  <button className=" bg-[#F6F6F6] px-4 py-1 rounded-md text-purple-600 text-sm flex items-center gap-x-2">
                    <VscAccount className=" text-xl " />
                    Profile
                  </button>
                  <button className=" bg-[#F6F6F6] px-4 py-1 rounded-md text-purple-600 text-sm flex items-center gap-x-2">
                    <RiLogoutCircleRLine className=" text-xl " />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainMenu;
