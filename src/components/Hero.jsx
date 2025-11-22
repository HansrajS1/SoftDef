import image1 from "../assets/image/Plant 1.png";
import bg from "../assets/image/Bg.jpg";
import bg2 from "../assets/image/Bg2.png";
import image2 from "../assets/image/Plant 2.png";
import image3 from "../assets/image/Plant 3.png";
import image4 from "../assets/image/P4.png";
import star from "../assets/icons/Star.png";
import { useState } from "react";

export default function Hero() {
  const slides = [
    { img: image1, name: "Aglaonema Plant" },
    { img: image2, name: "Desk Plant" },
    { img: image3, name: "Small Succulent" },
  ];

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);

  const item = slides[index];
  return (
    <section
      id="home"
      className="pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden relative min-h-screen"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Large background plant"
          className="w-full h-full object-fill"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white">Earth’s Exhale</h1>
            <p className="text-white/80 text-lg">
              “Earth Exhale” symbolizes the purity and vitality of the Earth’s
              natural environment and its essential role in sustaining life.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary border rounded px-6 py-2 text-lg">
                Buy Now
              </button>
              <button style={{ fontFamily: "'Indie Flower', cursive" }} className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              
                <svg
                  className="w-9 h-9 border rounded-full p-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Live Demo...
              </button>
            </div>
            <div
              className="mt-8 p-4 max-w-sm"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={image4}
                  className="h-10 w-10 rounded-full object-cover border border-white/20"
                  alt="Ronnie Hamill"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-white">Ronnie Hamill</div>
                  <img src={star} alt="Star rating" />
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Can’t express how thrilled I am with my natural plant. They
                bring such a fresh and vibrant essence to my home.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className=" ml-auto  p-4 h-[370px] w-[390px] bg-center bg-cover "
              style={{
                backgroundImage: `url(${bg2})`,
              }}
            >
              <div className="w-full h-80 m-3 rounded-lg overflow-visible -mt-25 relative z-10">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-80 h-full object-cover rounded-lg"
                />
                <p className="text-white/70 -mt-10 px-2 text-sm">
                  Indoor Plant
                </p>
                <div className="flex items-center justify-between px-2">
                <h3 className="text-white text-2xl font-semibold mb-1">
                  {item.name}
                </h3>
                  <button
                    onClick={nextSlide}
                    className="rounded-full p-3 hover:bg-white/10 transition-colors"
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
                  <button className="border border-white mx-2 rounded-lg w-30 px-4 p-2">
                    Buy Now
                  </button>

                <div className="flex justify-center gap-2 mt-6">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        i === index
                          ? "bg-white w-6 h-1"
                          : "bg-gray-600 w-3 h-1 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10 relative">
            <div className="relative inline-block px-6 py-3 z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                Our Trendy plants
              </h2>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 rounded-bl-2xl border-[#8B7A49]"
              />
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 rounded-tr-2xl border-[#8B7A49]"
              />
            </div>
          </div>

          <div className="space-y-12">
            <div
              className="grid border border-white/10 h-80 md:grid-cols-2 items-center p-1 rounded-4xl overflow-visible"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="order-2 md:order-1  -mt-25 relative z-10">
                <img
                  src={image2}
                  alt="Small green plant in white pot"
                  className=" w-full h-100 object-contain"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2 text-white">
                <h3 className="text-3xl font-semibold">
                  For Your Desks Decorations
                </h3>
                <p className="text-white/70">
                  I recently added a beautiful desk decoration plant to my
                  workspace, and it has made such a positive difference!
                </p>
                <p className="text-2xl font-bold">Rs. 599/-</p>
                <div className="flex gap-4">
                  <button className="px-6 py-2 border border-white rounded-lg text-white">
                    Explore
                  </button>
                  <button className="p-2 border border-white rounded-lg text-white">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="grid border border-white/10 md:grid-cols-2 gap-10 items-center p-6 rounded-2xl overflow-visible"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="space-y-4 text-white">
                <h3 className="text-3xl font-semibold">
                  For Your Desks Decorations
                </h3>
                <p className="text-white/70">
                  The greenery adds a touch of nature and serenity to my desk,
                  making it feel more inviting and calming.
                </p>
                <p className="text-2xl font-bold">Rs. 399/-</p>
                <div className="flex gap-4">
                  <button className="px-6 py-2 border border-white rounded-lg text-white">
                    Explore
                  </button>
                  <button className="p-2 border border-white rounded-lg text-white">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="-mt-25 relative z-10">
                <img
                  src={image3}
                  alt="Small succulent plant in light blue pot"
                  className="w-full h-100 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
