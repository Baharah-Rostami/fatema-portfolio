export default function About() {
  return (
    <section className="relative py-24 bg-[#F7F3E9] overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7A9D7E]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#8B6B4A]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#7A9D7E]/10 border border-[#7A9D7E]/20 text-[#2F5D50]">
            About Me
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#2F5D50]">
            My Professional Journey
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-[#7A9D7E]/20 rounded-3xl p-10 shadow-lg">

          {/* Intro */}
          <p className="text-[#3E3228] leading-relaxed text-lg">
            <span className="font-semibold text-[#2F5D50]">Fatema Arbabzadeh</span> is a graduate in Agriculture.
            She has gained valuable professional experience in administrative and educational sectors and is currently working as a teacher.
          </p>

          {/* Experience Timeline */}
          <div className="mt-10 space-y-6">

            {/* TLO */}
            <div className="border-l-4 border-[#7A9D7E] pl-5">
              <h3 className="text-xl font-semibold text-[#2F5D50]">
                TLO Organization (UNICEF Supported Project)
              </h3>
              <p className="text-[#6B5E53]">
                Worked for 3 years in an administrative role under a UNICEF-supported program.
              </p>
            </div>

            {/* ACDO */}
            <div className="border-l-4 border-[#8B6B4A] pl-5">
              <h3 className="text-xl font-semibold text-[#2F5D50]">
                ACDO Organization
              </h3>
              <p className="text-[#6B5E53]">
                Worked for approximately 8 months in the Education department.
              </p>
            </div>

            {/* Current Job */}
            <div className="border-l-4 border-[#7A9D7E] pl-5">
              <h3 className="text-xl font-semibold text-[#2F5D50]">
                Current Position
              </h3>
              <p className="text-[#6B5E53]">
                Currently working as a teacher in the education sector.
              </p>
            </div>

            {/* Graphic Design */}
            <div className="border-l-4 border-[#8B6B4A] pl-5">
              <h3 className="text-xl font-semibold text-[#2F5D50]">
                Graphic Design Journey
              </h3>
              <p className="text-[#6B5E53]">
                Started learning graphic design at WASSA Organization to develop creative and visual communication skills.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}