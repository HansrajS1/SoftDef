import bg2 from "../assets/image/bg2.png";

export default function ProductCard({ name, price, desc, img }) {
  return (
    <div className="relative flex justify-center items-center w-full">
      <img
        src={img}
        alt={name}
        className="
          absolute 
          z-20 
          w-[420px] h-[472px] 
          sm:w-[300px] sm:h-[300px] 
          lg:w-[350px] lg:h-[350px]
          object-contain 
          -top-24
          w-[90%] 
          "
      />
      <div
        className="
        w-[90%] 
          bg-cover bg-center overflow-hidden
          sm:w-[430px] 
          lg:w-[472px] 
          h-[420px] 
          sm:h-[450px] 
          lg:h-[470px] 
          relative
        "
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="mt-64 px-6 lg:px-10 flex flex-col h-full justify-between">
          <div className="space-y-2">
            <h4 className="text-2xl lg:text-3xl font-semibold text-white">
              {name}
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">{desc}</p>
            <div className="flex items-center justify-between ">
              <span className="font-semibold text-flora-accent text-xl">
                {price}
              </span>

              <button className="p-2 border border-white rounded-lg text-white hover:bg-white/20 transition">
                <svg
                  className="w-6 h-6"
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
      </div>
    </div>
  );
}
