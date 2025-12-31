import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { experiences } from "../data/experienceData";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100px", "end end"],
  });

  // ควบคุมความนุ่มของเส้น
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // ทำให้พื้นหลังขยับเล็กน้อย
  const bgMove = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 px-6 overflow-hidden"
    >
      {/* 🔹 Moving pattern background */}
      <motion.div
        className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-[0.05]"
        style={{
          backgroundPositionY: bgMove,
        }}
      />

      <div className="relative max-w-5xl mx-auto z-10">
        <h1 className="text-4xl font-bold mb-16 text-center text-blue-900 drop-shadow-sm">
          Experience Timeline
        </h1>

        <div className="relative pl-10 md:pl-16">
          {/* ✅ เส้นหลัก timeline — absolute เพื่อให้เห็นแน่นอน */}
          <div className="absolute left-[22px] md:left-[29px] top-0 bottom-0 w-[3px] bg-blue-200 rounded-full" />

          {/* ✅ เส้นเคลื่อนไหวตาม scroll */}
          <motion.div
            className="absolute left-[22px] md:left-[29px] top-0 w-[3px] bg-gradient-to-b from-blue-500 via-sky-500 to-indigo-600 rounded-full shadow-[0_0_12px_#60a5fa]"
            style={{ scaleY, originY: 0 }}
          />

          {/* ✅ แต่ละ event */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-10 md:pl-14 group"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* จุด timeline */}
                <motion.div
                  className="absolute left-[11px] md:left-[18px] top-5 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform"
                  whileHover={{ scale: 1.25 }}
                />

                <motion.div
                  className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <h2 className="text-lg md:text-xl font-semibold text-blue-800 group-hover:text-blue-600 transition-colors">
                    {exp.title}
                  </h2>
                  <p className="text-sm italic text-gray-600">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
