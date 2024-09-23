/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const AboutAccordition = () => {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: " Company History",
      description:
        'Founded in 2020, Fitness Equipment and Accessories began with a passion for promoting health and wellness by providing high-quality fitness products to individuals and gyms. Starting as a small venture with a limited range of products, the company has grown to become a trusted supplier of cutting-edge equipment, catering to fitness enthusiasts, athletes, and health clubs alike. Over the years, we have continuously expanded our offerings to include innovative solutions for strength training, cardio, recovery, and wellness.',
    },
    {
      title: "Company Mission",
      description:
        "Our mission is to empower people to lead healthier, more active lives by providing them with the best fitness equipment and accessories. We are committed to offering products that combine quality, functionality, and affordability, ensuring everyone can access tools to achieve their fitness goals, whether at home, in the gym, or outdoors.",
    },
    {
      title: "Company Vision",
      description:
        "We envision a world where fitness is accessible to everyone, regardless of location or experience level. Our goal is to be the leading global provider of fitness equipment and accessories, known for our dedication to innovation, customer satisfaction, and promoting a healthy lifestyle. We aim to inspire people to move, improve their well-being, and reach their full potential.",
    },
    
  ];
  const toggle = (idx: any) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="w-full max-w-[500px] rounded-lg bg-white p-3 *:mix-blend-difference dark:bg-zinc-800">
      {dataArr.map((PerAccordion, idx) => (
        <div
          key={idx}
          className="border-b border-gray-500/50 py-3 last-of-type:border-b-0"
        >
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-full items-center justify-between font-medium text-white outline-none"
          >
            <span>{PerAccordion.title}</span>
            <span className="rounded-full p-2">
              <svg
                className="ml-8 size-3 shrink-0 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
              </svg>
            </span>
          </button>
          <div
            className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden pr-4 text-sm">
              {PerAccordion.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutAccordition;
