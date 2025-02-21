"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

interface InfiniteMovingCardsProps {
  items: StaticImageData[]; // Menggunakan string[], karena hanya path gambar yang dikirim
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      updateAnimationProperties();
      setStart(true);
    }
  }

  function updateAnimationProperties() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      let duration;
      if (speed === "fast") duration = "20s";
      else if (speed === "normal") duration = "40s";
      else duration = "80s";

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((imgSrc, idx) => (
          <li key={idx} className="w-[250px] h-full">
            <Image src={imgSrc} width={200} height={200} className="w-full" alt="peggy" />
          </li>
        ))}
      </ul>
    </div>
  );
};
