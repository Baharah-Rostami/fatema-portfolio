export default function Hero({
  badge,
  title,
  subtitle,
}) {
  return (
    <section className="relative overflow-hidden bg-[#F7F3E9] py-24">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#7A9D7E]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B6B4A]/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {badge && (
          <span className="inline-block px-4 py-2 rounded-full bg-[#2F5D50]/10 text-[#2F5D50] text-sm font-medium mb-6">
            {badge}
          </span>
        )}

        <h1 className="text-4xl md:text-6xl font-bold text-[#2F5D50] mb-6">
          {title}
        </h1>

        <p className="max-w-2xl mx-auto text-[#3E3228] text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}