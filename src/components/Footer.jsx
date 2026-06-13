import { useState } from "react";
import { FaLeaf, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const year = new Date().getFullYear();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer className="relative bg-[#2F5D50] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#8B6B4A]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaLeaf />
            <h2 className="text-2xl font-bold">Fatema Portfolio</h2>
          </div>

          <p className="text-white/70 leading-relaxed mb-6">
            Creative graphic designer focused on branding, visual identity, and illustration.
            Let’s build something meaningful together.
          </p>

        </div>

        {/* CONTACT FORM */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Me</h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 outline-none focus:border-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 outline-none focus:border-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 outline-none focus:border-white"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-[#2F5D50] font-semibold hover:scale-105 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-white/10 py-4 text-center text-white/50 text-sm">
        <p className="text-white/50 text-sm">
            © {year} Author : Baharah Rostami | All rights reserved.
          </p>
      </div>
    </footer>
  );
}