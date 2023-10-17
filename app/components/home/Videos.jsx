"use client";

import YoutubeVideo from "./YoutubeVideo";

export default function Videos() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <div className="main-green-bg mx-auto w-full max-w-3xl rounded-3xl p-10">
        <h2 className="pt-0">Competition Example</h2>
        <YoutubeVideo src="https://www.youtube-nocookie.com/embed/dlHl53iXwEY?si=b_Q5jCw3-KhvvtYF" />
      </div>
      <div className="main-green-bg mx-auto w-full max-w-3xl rounded-3xl p-10">
        <h2 className="pt-0">What is FIRST?</h2>
        <YoutubeVideo src="https://www.youtube-nocookie.com/embed/oVhzG42vOoY" />
      </div>
    </div>
  );
}
