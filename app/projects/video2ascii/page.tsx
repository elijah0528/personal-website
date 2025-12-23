"use client";

import FancyLink from "@/components/FancyLink";
import Video2Ascii from "video2ascii";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function isWebGLAvailable() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

export default function Video2ascii() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  const videos = [
    {
      src: "https://cdn.generalintuition.com/media/video_nms.mp4",
    },
    {
      src: "https://cdn.generalintuition.com/media/video_gta.mp4",
    },
    {
      src: "https://cdn.generalintuition.com/media/video_rl.mp4",
    },
    {
      src: "https://cdn.generalintuition.com/media/video_f.mp4",
    },
    {
      src: "https://cdn.generalintuition.com/media/video_fs.mp4",
    },
  ];

  return (
    <main className="flex w-full min-h-screen flex-col items-center font-sans px-8">
      <div className="z-50 flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-md md:w-3/4 lg:w-1/2">
        <FancyLink
          href="/"
          className="text-accent-foreground/80 hover:text-accent-foreground transition-colors hover:translate-x-0!"
        >
          Back to Home
        </FancyLink>
        <article className="flex w-full flex-col gap-8">
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-accent-foreground">
              Video2ascii
            </h1>
            <p className="text-muted-foreground">December 2025</p>
            <p className="text-accent-foreground text-lg">
              WebGL-powered React Component for video to ASCII conversion
            </p>
          </header>
          <div>
            <div className="flex justify-center w-full">
              <Carousel className="w-full max-w-8xl">
                <CarouselContent>
                  {videos.map((video, index) => (
                    <CarouselItem key={video.src}>
                      <div className="p-2 flex flex-col items-center">
                        {hasWebGL === null ? (
                          <div className="w-full aspect-video rounded-lg bg-muted animate-pulse shadow-md" />
                        ) : hasWebGL ? (
                          <Video2Ascii
                            className="w-full h-auto overflow-hidden rounded-lg shadow-md"
                            src={video.src}
                            numColumns={100}
                            colored={true}
                            brightness={2.0}
                            enableMouse={true}
                            enableRipple={true}
                            charset="standard"
                          />
                        ) : (
                          <div className="w-full flex flex-col gap-3">
                            <p className="text-sm px-4 text-muted-foreground">
                              WebGL is unavailable (blocked/unsupported), so the
                              interactive ASCII renderer can’t run here.
                            </p>
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="mt-2 px-4 py-2 text-accent-foreground">
              <p className="text-md text-muted-foreground">
                Here are some interactive examples of{" "}
                <span className="font-bold">Video2Ascii</span> in action. Try
                hovering over the videos and clicking to trigger ASCII ripple
                effects.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
