import { services } from "../../Data/Services";

export default function Services() {
  return (
    <section className="relative py-24 bg-[#2F5D50] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#8B6B4A]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white border border-white/20">
            Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            What I Can Do For You
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Creative design solutions focused on branding, visuals, and user experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#7A9D7E]/10 mb-5 group-hover:rotate-6 transition">
                  <Icon className="text-[#2F5D50] text-2xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#2F5D50] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B5E53] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}