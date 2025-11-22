import logo from "../assets/icons/Logo.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-10 bg-[#1B2316] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FloraVision Logo" className="w-13 h-13 object-contain" /> 
            <h4 className="text-2xl font-bold">FloraVision.</h4>
          </div>
        
          <p className="text-white/80">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-lg mb-4">Quick Link's</h5>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white/70 underline transition-colors">Home</a></li>
            <li><a href="#types" className="hover:text-white/70 underline transition-colors">Type's Of plant's</a></li>
            <li><a href="#contact" className="hover:text-white/70 underline transition-colors">Contact</a></li>
            <li><a href="#privacy" className="hover:text-white/70 underline transition-colors">Privacy</a></li>
          </ul>
        </div>
        <div >
          <h5 className="font-semibold text-lg mb-4">For Every Update.</h5>
          <div className="flex border w-fit border-white rounded-lg ">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-4 py-3 rounded-lg bg-[#1A1A1A] focus:outline-none focus:border-white/80 text-white placeholder:text-white/50"
            />
            <button className="px-6  m-[1px] py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-white/70">
        
        <div className="flex gap-4 mb-2 sm:mb-0 font-semibold">
          <a href="#" className="hover:text-white transition-colors">FB</a>
          <a href="#" className="hover:text-white transition-colors">TW</a>
          <a href="#" className="hover:text-white transition-colors">LI</a>
        </div>
        <div className="text-center text-white sm:text-right">
          FloraVision © all right reserve
        </div>
      </div>
    </footer>
  );
}