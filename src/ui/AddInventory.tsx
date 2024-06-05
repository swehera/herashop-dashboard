"use client";

import Image from "next/image";
import { useState } from "react";

const AddInventory = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };
  return (
    <div className=" w-full md:w-[75%] mb-10">
      <p className=" text-2xl text-gray-800 font-semibold mb-2">
        Add New Inventory
      </p>
      <div className=" flex flex-col md:flex-row  justify-between gap-x-2">
        {/* this is for small devices */}
        {/* image upload work start here */}
        <div className=" w-full md:w-[30%] block md:hidden my-2">
          <div className=" w-full border border-gray-900 rounded-md">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
              <h2 className=" text-sm md:text-xl font-bold mb-4">
                Product Images
              </h2>
              <div className="mb-4">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              {imagePreview && (
                <div className="mb-4">
                  <Image
                    src={imagePreview}
                    width={120}
                    height={120}
                    alt="Preview"
                    className="w-full h-auto max-h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
              {/* <button
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={() => alert("Image uploaded!")}
              >
                Upload
              </button> */}
            </div>
          </div>
        </div>

        {/* this is for product content add */}
        <div className=" w-full  md:w-[70%]">
          {/* this if for add product data start */}
          <div className=" border border-gray-300 rounded-md w-full ">
            <p className=" text-xl text-gray-700 font-semibold py-3 px-3">
              Product Info
            </p>
            <hr className=" bg-slate-300 w-full mb-2" />
            <div className="flex flex-col mt-2 gap-y-2 px-3 py-3">
              <label className="text-sm font-semibold text-gray-600">
                Item Name
              </label>
              <input
                type="text"
                placeholder="Item Name"
                className="border text-sm border-gray-300 px-4 py-1 rounded-md outline-none focus-visible:shadow-lg"
              />
            </div>

            <div className="flex flex-col mt-2 gap-y-2 px-3 py-3">
              <label className="text-sm font-semibold text-gray-600">
                Category
              </label>
              <div className=" flex items-center justify-between gap-x-2 border border-gray-300 rounded-md">
                <select className=" outline-none px-3 py-1 rounded-md w-full">
                  <option disabled value="select-category">
                    Select category
                  </option>

                  {/* <option value="opel">Opel</option>
                <option value="audi">Audi</option> */}
                  <option
                    value="No-category"
                    className=" text-gray-600 text-sm"
                  >
                    No category
                  </option>
                </select>
                <button className=" px-5 py-1 rounded-md text-2xl text-white bg-purple-600">
                  +
                </button>
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-2  px-3 py-3">
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Sell/Current Price
                </label>
                <input
                  type="text"
                  placeholder="Item Name"
                  className="border text-sm border-gray-300 px-4 py-1 w-full  rounded-md outline-none focus-visible:shadow-lg"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Regular/Old Price
                </label>
                <input
                  type="text"
                  placeholder="Item Name"
                  className="border text-sm border-gray-300 px-4 py-1 w-full  rounded-md outline-none focus-visible:shadow-lg"
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-2  px-3 py-3">
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Buying Price (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Buying Price (Optional)"
                  className="border text-sm border-gray-300 px-4 py-1 w-full rounded-md outline-none focus-visible:shadow-lg"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Product Code
                </label>
                <input
                  type="text"
                  placeholder="Product Code"
                  className="border text-sm border-gray-300 px-4 py-1 w-full rounded-md outline-none focus-visible:shadow-lg"
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2  gap-y-3 md:gap-x-2 px-3 py-3">
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Quantity (Stock)
                </label>
                <input
                  type="text"
                  placeholder=" Quantity (Stock)"
                  className="border text-sm border-gray-300 px-4 py-1 w-full rounded-md outline-none focus-visible:shadow-lg"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Warranty
                </label>
                <input
                  type="text"
                  placeholder="Warranty"
                  className="border text-sm border-gray-300 px-4 py-1 w-full rounded-md outline-none focus-visible:shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col mt-2 gap-y-2 px-3 py-3">
              <label className="text-sm font-semibold text-gray-600">
                Description
              </label>
              <textarea
                typeof="text"
                cols={1}
                rows={3}
                placeholder="Description"
                className=" h-28 outline-none border border-gray-300 rounded-md px-3 py-3"
              />
            </div>

            {/* add product work start here */}
            <div className=" px-3 py-3">
              <button className=" w-full bg-blue-600 text-white py-1 rounded-md">
                Add to product
              </button>
            </div>
          </div>
        </div>

        {/* image upload work start here */}
        <div className=" w-[30%] hidden md:block">
          <div className=" w-full border border-gray-300 rounded-md">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Product Images</h2>
              <div className="mb-4">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              {imagePreview && (
                <div className="mb-4">
                  <Image
                    src={imagePreview}
                    width={120}
                    height={120}
                    alt="Preview"
                    className="w-full h-auto max-h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
              {/* <button
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={() => alert("Image uploaded!")}
              >
                Upload
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
