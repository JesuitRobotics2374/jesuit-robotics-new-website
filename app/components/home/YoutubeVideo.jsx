"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";

export default function YoutubeVideo() {
  return (
    <div className="w-2/3">
      <AspectRatio.Root ratio={560 / 315}>
        <iframe
          src="https://www.youtube-nocookie.com/embed/dlHl53iXwEY?si=b_Q5jCw3-KhvvtYF"
          title="YouTube Robotics Video"
          allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="h-full w-full rounded-2xl rounded-tr-[4rem] border-none outline-none"
          allowFullScreen
        />
      </AspectRatio.Root>
    </div>
  );
}
