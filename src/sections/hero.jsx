import { GiSparkles } from "react-icons/gi";

export default function Hero({ badge, title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F3E9] via-[#F5F0E4] to-[#E9E0D1] py-16 md:py-24 lg:py-28">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#7A9D7E]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8B6B4A]/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          {badge && (
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2F5D50]/10 border border-[#2F5D50]/20 text-[#2F5D50] mb-6">
              <GiSparkles size={16} />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F5D50] leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#3E3228] leading-relaxed max-w-xl mx-auto lg:mx-0">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 rounded-xl bg-[#2F5D50] text-white hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-[#2F5D50] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (REUSABLE) */}
        <div className="relative flex justify-center mt-10 lg:mt-0">

          {/* Back card */}
          <div className="w-64 sm:w-72 md:w-80 aspect-[3/4] bg-[#7A9D7E]/30 rounded-2xl rotate-6 shadow-lg" />

          {/* Front card (IMAGE HERE) */}
          <div className="absolute -top-4 -left-4 w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl shadow-xl -rotate-6 overflow-hidden bg-white">

            {image ? (
              <img
                src={image}
                alt="Hero visual"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#2F5D50]">
                No Image
              </div>
            )}

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

        </div>

      </div>
    </section>
  );
}