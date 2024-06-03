"use client";
import React, { useState, useEffect } from "react";

const DateDisplay = () => {
  const formatDate = (date: any) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(formatDate(date));
  }, []);

  return (
    <div>
      <p className=" text-gray-400">{currentDate}</p>
    </div>
  );
};

export default DateDisplay;
