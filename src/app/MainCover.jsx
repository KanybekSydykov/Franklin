'use client'
import React, { useState, useEffect } from 'react';
import Preview from '@/components/videoplayer/preview/Preview';
import Main from "./Main";

const MainCover = ({ videoPreloader, componentPreload, pages, videoHomePage, params }) => {
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    // After 8 seconds, hide the preview
    const timer = setTimeout(() => {
      setShowPreview(false);
    }, 8000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      {showPreview && <Preview videoUrl={videoPreloader.url} componentPreload={componentPreload} />}
      {!showPreview && <Main data={pages} videoUrl={videoHomePage.url} params={params} />}
    </>
  );
};

export default MainCover;
