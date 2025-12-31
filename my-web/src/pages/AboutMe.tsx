import { aboutData } from "../data/aboutData";

export default function AboutMe() {
  return (
    <main className="text-gray-800">
      <section
        className="relative h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/portfolio/let-him-cook-thumb.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4">{aboutData.fullname}</h1>
          <p className="text-lg font-light max-w-2xl mx-auto">
            Third-year Digital Game Development student at Chiang Mai University
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-20 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Development",
              desc: "Unity (C#), Unreal, Web (HTML/CSS/JS), Flutter & Firebase prototypes.",
              icon: "💻",
            },
            {
              title: "Design",
              desc: "UI/UX, brand & marketing visuals, layout systems, and asset pipelines.",
              icon: "🎨",
            },
            {
              title: "Content",
              desc: "Video editing, motion snippets, and campaign assets for events/brands.",
              icon: "📹",
            },
            {
              title: "Collaboration",
              desc: "Git, GitHub, Notion, and project coordination tools for production teams.",
              icon: "🤝",
            },
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Technologies (Compact Layout) */}
<section className="py-16 bg-gradient-to-b from-white to-blue-50 text-gray-800 fade-in">
  <div className="container mx-auto px-6">
    <h2 className="text-2xl font-bold text-blue-600 mb-8">Tools & Technologies</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "GAME DEVELOPMENT & WEB / APP",
          subcategories: [
            {
              subtitle: "Game Development",
              icons: [
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", name: "C#" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", name: "Unity" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg", name: "Unreal" },
              ],
            },
            {
              subtitle: "Web & App Development",
              icons: [
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png", name: "Tailwind" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", name: "Flutter" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "Firebase" },
              ],
            },
          ],
        },
        {
          title: "DESIGN & VIDEO TOOLS",
          subcategories: [
            {
              subtitle: "Design Tools & 3D Tools",
              icons: [
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", name: "Photoshop" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", name: "Illustrator" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma" },
                { src: "https://brandlogovector.com/wp-content/uploads/2022/02/Canva-App-Logo.png", name: "Canva" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", name: "Blender" },
              ],
            },
            {
              subtitle: "Video edited Tools",
              icons: [
                
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/960px-Adobe_Premiere_Pro_CC_icon.svg.png", name: "Premiere Pro" },
                { src: "https://static.vecteezy.com/system/resources/previews/055/030/388/non_2x/capcut-circle-icon-logo-symbol-free-png.png", name: "CapCut" },
              ],
            },
          ],
        },
        {
          title: "COLLABORATION & PRODUCTIVITY",
          subcategories: [
            {
              subtitle: "Version Control",
              icons: [
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", name: "GitLab" },
              ],
            },
            {
              subtitle: "Office Tools",
              icons: [
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Microsoft_Office_Word_%282019%E2%80%932025%29.svg/330px-Microsoft_Office_Word_%282019%E2%80%932025%29.svg.png", name: "Word" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%932025%29.svg.png", name: "Excel" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Microsoft_PowerPoint_2013-2019_logo.svg/1128px-Microsoft_PowerPoint_2013-2019_logo.svg.png", name: "PowerPoint" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png", name: "Docs" },
                { src: "https://cloud.gmelius.com/public/logos/google/Google_Sheets_Logo_512px.png", name: "Sheets" },
              ],
            },
          ],
        },
      ].map((cat) => (
        <div
          key={cat.title}
          className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300"
        >
          <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
            {cat.title}
          </h3>
          {cat.subcategories.map((sub) => (
            <div key={sub.subtitle} className="mb-4">
              <h4 className="text-xs font-medium text-blue-500 mb-2">{sub.subtitle}</h4>
              <div className="grid grid-cols-4 gap-3 place-items-center">
                {sub.icons.map((icon) => (
                  <div key={icon.name} className="flex flex-col items-center group">
                    <img
                      src={icon.src}
                      alt={icon.name}
                      className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-200 group-hover:scale-110"
                    />
                    <p className="text-[10px] text-gray-500 mt-1">{icon.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
