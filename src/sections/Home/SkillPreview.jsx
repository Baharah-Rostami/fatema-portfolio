import { FaPalette, FaLaptopCode, FaPrint, FaPenNib } from "react-icons/fa";
import { MdOutlinePermMedia } from "react-icons/md";
import { Link } from "react-router-dom";
const skills = [
    {
        icon: FaPalette,
        title: "Branding",
    },
    {
        icon: MdOutlinePermMedia,
        title: "Social Media",
    },
    {
        icon: FaPrint,
        title: "Print Design",
    },
    {
        icon: FaLaptopCode,
        title: "UI/UX Design",
    },
    {
        icon: FaPenNib,
        title: "Illustration",
    },
];

export default function SkillsPreview() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">

            {/* Background soft shapes */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-72 h-72 bg-[#7A9D7E]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#8B6B4A]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                {/* Header */}
                <span className="inline-block px-4 py-2 rounded-full bg-[#7A9D7E]/10 text-[#2F5D50] border border-[#7A9D7E]/20">
                    Skills
                </span>

                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#2F5D50]">
                    What I Do Best
                </h2>

                <p className="mt-4 text-[#6B5E53] max-w-2xl mx-auto">
                    A mix of creative and technical skills used to build modern and impactful designs.
                </p>

                {/* Skills Grid */}
                <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                    {skills.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-[#F7F3E9] hover:bg-[#2F5D50] transition rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-2 duration-300"
                            >
                                <Icon className="text-3xl text-[#2F5D50] group-hover:text-white transition" />

                                <p className="text-[#2F5D50] group-hover:text-white font-medium">
                                    {skill.title}
                                </p>
                            </div>
                        );
                    })}

                </div>

                {/* Button */}
                <div className="mt-12">
                    <Link to="skills"
                        className="inline-block px-6 py-3 rounded-xl bg-[#2F5D50] text-white hover:scale-105 transition">
                        View All Skills
                    </Link>
                </div>

            </div>
        </section>
    );
}