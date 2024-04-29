"use client";
import AboutUsCover from "@/components/shared-components/aboutPage/AboutUsCover";

export default function AboutPage({ params, data }) {
  return (
    <>
      <AboutUsCover data={data} params={params} ></AboutUsCover>
    </>
  );
}
