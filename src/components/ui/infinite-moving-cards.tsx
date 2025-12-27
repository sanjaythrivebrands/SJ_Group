"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type CardItem = {
  quote?: string;
  name: string;
  title: string;
  icon?: React.ReactNode;
  image?: string;
  bgColor?: string;
  variant?: "quote" | "card";
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: CardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => {
          const variant = item.variant || (item.quote ? "quote" : "card");
          
          if (variant === "card") {
            // Check if bgColor is a hex color or Tailwind class
            const isHexColor = item.bgColor && /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(item.bgColor);
            const isTailwindClass = item.bgColor && (item.bgColor.includes("bg-") || item.bgColor.includes("gradient"));
            const bgColorClass = isTailwindClass ? item.bgColor : "";
            const bgColorStyle = isHexColor ? { backgroundColor: item.bgColor } : undefined;
            
            return (
              <li
                className={cn(
                  "relative w-[280px] max-w-full shrink-0 rounded-2xl overflow-hidden md:w-[320px] flex flex-col",
                  bgColorClass || (!item.bgColor && "bg-gradient-to-br from-slate-500 to-slate-600")
                )}
                key={`${item.name}-${idx}`}
                style={bgColorStyle}
              >
                {item.image ? (
                  <div className="relative h-48 w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-base text-white/90">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {item.icon && (
                      <div className="mb-6 text-4xl md:text-5xl flex items-center justify-center px-6 pt-8">
                        {item.icon}
                      </div>
                    )}
                    <div className="flex flex-col px-6 pb-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-base text-white/90">
                        {item.title}
                      </p>
                    </div>
                  </>
                )}
              </li>
            );
          }
          
          return (
            <li
              className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
              key={`${item.name}-${idx}`}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                {item.quote && (
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                    {item.quote}
                  </span>
                )}
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
