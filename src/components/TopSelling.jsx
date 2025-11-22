import { products } from "../data.js";
import ProductCard from "./ProductCard.jsx";

export default function TopSelling() {
  return (
    <section id="store" className="section py-12 md:py-16">
      <div className="text-center mb-10 relative">
        <div className="relative mb-25 inline-block px-6 py-3 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Our Top Selling Plants
          </h2>
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-15 h-15 border-b-4 border-l-4 rounded-bl-2xl border-[#8B7A49]"
          />
          <span
            aria-hidden="true"
            className="absolute top-0 right-0 w-15 h-15 border-t-4 border-r-4 rounded-tr-2xl border-[#8B7A49]"
          />
        </div>
      </div>

      <div className="grid px-4 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
