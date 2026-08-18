"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  VolumeX,
  Volume2,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const stories = [
  {
    name: "Mishi Patel",
    place: "Mumbai Studio Visit",
    category: "Necklaces",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-female-model-in-indian-style-101450-large.mp4",
  },
  {
    name: "Ananya Rao",
    place: "Bridal Consultation",
    category: "Rings",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-a-young-woman-in-traditional-indian-attire-and-jewelry-posing-39884-large.mp4",
  },
  {
    name: "Kavya Shah",
    place: "Custom Bangle Set",
    category: "Bangles",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-a-woman-using-jewelry-on-her-hand-and-face-posing-39889-large.mp4",
  },
  {
    name: "Diya Mehta",
    place: "Anniversary Gift",
    category: "Earrings",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-a-woman-adorned-with-jewelry-on-her-hand-and-face-posing-39891-large.mp4",
  },
  {
    name: "Riya Kapoor",
    place: "Everyday Jewellery",
    category: "Bracelets",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-beautiful-indian-model-posing-39892-large.mp4",
  },
];

export default function VideoStoriesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
    },
    [
      Autoplay({
        delay: 4200,
        stopOnInteraction: false,
      }),
    ]
  );

  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section overflow-hidden bg-[#fbf8f3]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="container-lg">

        <Reveal className="text-center mb-12 md:mb-14">

          <span className="eyebrow">
            Real Stories, On Camera
          </span>

          <h2
            className="
              font-display
              text-3xl
              md:text-[2.4rem]
              text-maroon-deep
              mt-3
            "
          >
            Straight From Our Customers
          </h2>

          <p
            className="
              text-sm
              text-ink-soft
              mt-4
              max-w-lg
              mx-auto
              leading-relaxed
            "
          >
            See how our jewellery becomes part of real
            celebrations, milestones and everyday moments.
          </p>

        </Reveal>

      </div>


      {/* =====================================================
          SLIDER
      ====================================================== */}

      <div
        className="embla"
        ref={emblaRef}
      >

        <div className="embla__container">

          {stories.map((s, i) => (
            <StoryVideoCard
              key={s.name}
              story={s}
              index={i}
              isActive={selected === i}
            />
          ))}

        </div>

      </div>


      {/* =====================================================
          CONTROLS
      ====================================================== */}

      <div className="container-lg flex items-center justify-center gap-6 mt-7">

        <button
          aria-label="Previous story"
          onClick={() => emblaApi?.scrollPrev()}
          className="
            w-10
            h-10
            rounded-full
            border
            border-line
            flex
            items-center
            justify-center
            text-maroon
            hover:border-maroon
            hover:bg-maroon
            hover:text-white
            transition-all
            duration-300
          "
        >
          <ChevronLeft
            className="w-4 h-4"
            strokeWidth={1.8}
          />
        </button>


        {/* Dots */}

        <div className="flex items-center gap-2">

          {stories.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to story ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  selected === i
                    ? "w-7 bg-gold"
                    : "w-1.5 bg-maroon/20"
                }
              `}
            />
          ))}

        </div>


        <button
          aria-label="Next story"
          onClick={() => emblaApi?.scrollNext()}
          className="
            w-10
            h-10
            rounded-full
            border
            border-line
            flex
            items-center
            justify-center
            text-maroon
            hover:border-maroon
            hover:bg-maroon
            hover:text-white
            transition-all
            duration-300
          "
        >
          <ChevronRight
            className="w-4 h-4"
            strokeWidth={1.8}
          />
        </button>

      </div>

    </section>
  );
}


/* ============================================================
   STORY VIDEO CARD
============================================================ */

function StoryVideoCard({
  story,
  index,
  isActive,
}: {
  story: {
    name: string;
    place: string;
    category: string;
    video: string;
  };
  index: number;
  isActive: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);


  /* ============================================================
     PLAY / PAUSE
  ============================================================ */

  const togglePlay = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };


  /* ============================================================
     MUTE / UNMUTE
  ============================================================ */

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;

    setMuted(videoRef.current.muted);
  };


  return (
    <div
      className="
        embla__slide
        min-w-0
        flex-[0_0_78%]
        xs:flex-[0_0_60%]
        sm:flex-[0_0_42%]
        md:flex-[0_0_30%]
        lg:flex-[0_0_23%]
        px-3
      "
    >

      <div
        className={`
          transition-all
          duration-500
          ease-out
          ${
            isActive
              ? "scale-100 opacity-100"
              : "scale-90 opacity-40"
          }
        `}
      >

        {/* ======================================================
            VIDEO
        ======================================================= */}

        <div
          className="
            relative
            aspect-[9/14]
            overflow-hidden
            rounded-[26px]
            bg-[#2c1017]
            shadow-[0_15px_45px_rgba(63,12,21,0.18)]
            group
          "
        >

          <video
            ref={videoRef}
            src={story.video}
            muted={muted}
            playsInline
            preload="metadata"
            loop
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-105
            "
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />


          {/* ====================================================
              VIDEO GRADIENT
          ===================================================== */}

          <div
            className="
              absolute
              inset-0
              pointer-events-none
              bg-gradient-to-t
              from-[#250b11]/85
              via-transparent
              to-[#250b11]/20
            "
          />


          {/* ====================================================
              TOP CATEGORY
          ===================================================== */}

          <div
            className="
              absolute
              top-4
              left-4
              right-4
              flex
              items-center
              justify-between
              z-10
            "
          >

            <span
              className="
                px-3
                py-1.5
                rounded-full
                bg-black/20
                backdrop-blur-md
                border
                border-white/20
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/90
              "
            >
              {story.category}
            </span>


            {/* Mute */}

            <button
              type="button"
              aria-label={
                muted
                  ? "Unmute video"
                  : "Mute video"
              }
              onClick={toggleMute}
              className="
                w-9
                h-9
                rounded-full
                bg-black/20
                backdrop-blur-md
                border
                border-white/20
                flex
                items-center
                justify-center
                text-white
                hover:bg-black/40
                transition-all
              "
            >
              {muted ? (
                <VolumeX
                  className="w-4 h-4"
                  strokeWidth={1.7}
                />
              ) : (
                <Volume2
                  className="w-4 h-4"
                  strokeWidth={1.7}
                />
              )}
            </button>

          </div>


          {/* ====================================================
              PLAY BUTTON
          ===================================================== */}

          <button
            type="button"
            aria-label={
              playing
                ? `Pause ${story.name}'s story`
                : `Play ${story.name}'s story`
            }
            onClick={togglePlay}
            className="
              absolute
              inset-0
              m-auto
              w-16
              h-16
              rounded-full
              bg-cream/95
              flex
              items-center
              justify-center
              shadow-[0_10px_35px_rgba(0,0,0,0.25)]
              transition-all
              duration-300
              hover:scale-110
              z-10
            "
          >

            {playing ? (
              <Pause
                className="
                  w-5
                  h-5
                  text-maroon-deep
                "
                fill="currentColor"
              />
            ) : (
              <Play
                className="
                  w-5
                  h-5
                  text-maroon-deep
                  ml-1
                "
                fill="currentColor"
              />
            )}

          </button>


          {/* ====================================================
              BOTTOM INFORMATION
          ===================================================== */}

          <div
            className="
              absolute
              left-5
              right-5
              bottom-5
              z-10
            "
          >

            <div className="flex items-center gap-2 mb-2">

              <span
                className="
                  w-7
                  h-px
                  bg-gold-light
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-gold-light
                "
              >
                Customer Story
              </span>

            </div>


            <div
              className="
                font-display
                text-cream
                text-sm
              "
            >
              SUNRISE
            </div>

          </div>

        </div>


        {/* ======================================================
            CUSTOMER NAME
        ======================================================= */}

        <p
          className="
            text-center
            font-display
            text-base
            text-maroon-deep
            mt-4
          "
        >
          {story.name}
        </p>


        {/* ======================================================
            PLACE
        ======================================================= */}

        <p
          className="
            text-center
            text-xs
            text-ink-soft
            mt-0.5
          "
        >
          {story.place}
        </p>

      </div>

    </div>
  );
}