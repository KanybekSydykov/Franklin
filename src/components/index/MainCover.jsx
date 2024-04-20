"use client";
import React, { useState, useEffect } from "react";
import Preview from "@/components/videoplayer/preview/Preview";
import Main from "./Main";

const MainCover = ({
  videoPreloader,
  componentPreload,
  pages,
  videoHomePage,
  params,
}) => {
  const [showPreview, setShowPreview] = useState(true);
  const [isVisited, setIsVisited] = useState(false);

  useEffect(() => {
    if (window) {
      setIsVisited(sessionStorage.getItem("isVisited"));
    }
    // After 8 seconds, hide the preview
    const timer = setTimeout(() => {
      setShowPreview(false);
      if (window) {
        sessionStorage.setItem("isVisited", "true");
        setIsVisited(sessionStorage.getItem("isVisited"));
      }
    }, 8000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      {showPreview && !isVisited && (
        <Preview
          videoUrl={videoPreloader.url}
          componentPreload={componentPreload}
        />
      )}
      {isVisited && (
        <Main data={pages} videoUrl={videoHomePage.url} params={params} />
      )}
    </>
  );
};

export default MainCover;
