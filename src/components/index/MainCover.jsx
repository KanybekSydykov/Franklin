"use client";
import React, { useState, useEffect } from "react";
import Preview from "@/components/videoplayer/preview/Preview";
import Main from "./Main";

const MainCover = ({ data, params }) => {
  const [showMain, setShowMain] = useState(false);
  const [isVisited, setIsVisited] = useState(false);

  useEffect(() => {
    if (window) {
      setIsVisited(sessionStorage.getItem("isVisited"));
    }
  }, []); // Empty dependency array ensures this effect runs only once

  function handlePreviewEnd() {
    sessionStorage.setItem("isVisited",'true');
    setIsVisited(true);
  }

  function handleMainVisibility() {
    setShowMain(true);
  }

  return (
    <>
       {!isVisited && <Preview params={params} handlePreviewEnd={handlePreviewEnd} handleMainVisibility={handleMainVisibility} />} 
        <Main zIndex={isVisited} data={data} params={params} />

       
      
      {/* {isVisited && (
        <Main data={pages} videoUrl={videoHomePage.url} params={params} />
      )} */}
    </>
  );
};

export default MainCover;
