import { reviews } from "../data.js";
import bg2 from "../assets/image/bg2.png";
import Star from "../assets/icons/star.png";

export default function Reviews() {
  return (
    <section className="section py-12 md:py-16">
      <div className="text-center mb-10 md:mb-16">
        <div className="relative inline-block px-6 py-3 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Customer Review
          </h2>
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 rounded-bl-2xl border-[#8B7A49]"
          />
          <span
            aria-hidden="true"
            className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 rounded-tr-2xl border-[#8B7A49]"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center overflow-x-auto px-4">
        {reviews.map((r) => (
          <div className="h-[370px] w-[390px] bg-center bg-cover flex justify-center items-center mx-auto"
            style={{
              backgroundImage: `url(${bg2})`,
            }}
          >
            <div key={r.name} className="text-white flex flex-col p-6 md:p-10 rounded-2xl mb-8">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="h-10 w-10 rounded-full object-cover border border-white/20"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">{r.name}</span>
                  <img src={Star} alt="Star rating" />
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
