"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";

export default function YoutubeVideo({ src }) {
  return (
    <div className="mx-auto w-full">
      <AspectRatio.Root ratio={560 / 315}>
        <iframe
          src={src}
          title="YouTube Robotics Video"
          allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="h-full w-full rounded-2xl  border-none outline-none"
          allowFullScreen
        />
      </AspectRatio.Root>
    </div>
  );
}
