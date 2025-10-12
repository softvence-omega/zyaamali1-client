import React from "react";

type HeroSectionProps = {
  backgroundImage: string;
  titleTop: string;
  titleBottom: string;
  gradientFrom?: string;
  gradientTo?: string;
  description?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  titleTop,
  titleBottom,
  gradientFrom = "#8E6EFF",
  gradientTo = "#000000",
  description,
}) => {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-1"
      />

      {/* Foreground Content */}
      <div className="relative z-20 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-center">
          <span
            className="bg-clip-text text-transparent "
            style={{
              backgroundImage: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {titleTop}
          </span>
          <span className="text-black block">{titleBottom}</span>
        </h1>

        {description && (
          <p className="text-black dark:text-gray-300 mt-4 text-base sm:text-lg max-w-6xl mx-auto ">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
