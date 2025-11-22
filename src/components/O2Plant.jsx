import React, { useState } from "react";
import image1 from "../assets/image/Plant 1.png";
import image2 from "../assets/image/Plant 2.png";
import image3 from "../assets/image/Plant 3.png";
import image4 from "../assets/image/Plant 4.png";

const o2PlantsData = [
  {
    id: 1,
    image: image1,
    title: "We Have Small And Best O2 Plants Collection's",
    description1:
      "Oxygen-producing plants, often referred to as “O2 plants,” are those that release oxygen into the atmosphere through the process of photosynthesis.",
    description2:
      "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
  },
  {
    id: 2,
    image: image2,
    title: "Sansevieria Trifasciata (Snake Plant)",
    description1:
      "The Snake Plant is highly valued because it performs crassulacean acid metabolism (CAM), allowing it to release oxygen at night.",
    description2:
      "NASA studies found it effective at removing common indoor air toxins, including benzene, formaldehyde, trichloroethylene, and xylene.",
  },
  {
    id: 3,
    image: image3,
    title: "Spathiphyllum (Peace Lily)",
    description1:
      "The Peace Lily is a vibrant, low-light plant known for its beautiful white blooms and exceptional air-purifying qualities.",
    description2:
      "It excels at breaking down harmful chemicals such as ammonia, acetone, methanol, and ethyl acetate, making the air in your home fresher.",
  },
  {
    id: 4,
    image: image4,
    title: "Aglaonema (Chinese Evergreen)",
    description1:
      "The Aglaonema plant, often called Chinese Evergreen, is popular for its beautiful, variegated foliage and ability to thrive in low-light conditions.",
    description2:
      "It is highly effective in filtering out common indoor pollutants, particularly benzene and formaldehyde, making it an excellent choice for improving air quality.",
  },
];

export default function O2PlantsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPlant = o2PlantsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? o2PlantsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === o2PlantsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section py-12 md:py-16 bg-dark-green-bg relative overflow-hidden">
      <div className="max-w-[70%] max-h-full mx-auto px-4 z-10 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white inline-block px-6 py-2 relative">
            Our Best o2
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-15 h-15 border-b-4 border-l-4 rounded-bl-2xl border-[#8B7A49]"
            />
            <span
              aria-hidden="true"
              className="absolute top-0 right-0 w-15 h-15 border-t-4 border-r-4 rounded-tr-2xl border-[#8B7A49]"
            />
          </h2>
        </div> 

        <div
          className="grid md:grid-cols-2 items-center rounded-[28px] shadow-2xl overflow-visible bg-[#343C2B]" 
        >
          <div className="relative z-10 -mt-25 flex justify-center">
            <img
              src={currentPlant.image}
              alt="O2 Plant"
              className="w-[700px] -my-25 md:w-[650px] h-[600px] md:h-[550px] object-cover rounded-[20px]"
            />
          </div>

          <div className="text-white space-y-4 p-6 ">
            <h3 className="text-[28px] md:text-[38px] font-bold leading-tight">
              {currentPlant.title}
            </h3>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              {currentPlant.description1}
            </p>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              {currentPlant.description2}
            </p>

            <div className="flex flex-wrap items-center justify-between mt-4 gap-4 min-h-[56px]">
              <button className="px-4 py-2 border border-white/30 rounded-lg text-white text-base md:text-lg hover:bg-white/10 transition-colors">
                Explore
              </button>
              <div className="flex items-center gap-3 text-white text-base md:text-lg font-medium">
                <button
                  onClick={handlePrev}
                  className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Previous plant"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </button>
                <span>{`0${currentIndex + 1}/0${o2PlantsData.length}`}</span>
                <button
                  onClick={handleNext}
                  className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Next plant"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {o2PlantsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-gray-600 w-3 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
