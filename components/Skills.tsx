export default function Skills() {
  const skills = [
    "HTML",
    "Figma",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  return (
    <section
      id="skills"
      className="h-[550px] flex justify-center items-center bg-violet-400 bg-opacity-35 text-black px-8"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-6xl ">
        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-300 p-6 rounded-xl text-center text-xl font-semibold shadow-md hover:scale-105 transition-transform"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-10 transform transition-all duration-500 animate-slide-in">
          <h1 className="text-2xl font-bold text-blue-950 mb-4 ">
            My Technology Stack
          </h1>
          <p>
            I have expertise in React, Next.js, and Tailwind CSS, specializing
            in building modern, high-performance, and responsive web
            applications. With a strong foundation in JavaScript and frontend
            architecture, I create intuitive UI/UX experiences that enhance user
            engagement. Passionate about clean code, state management, and
            component-driven development, I strive to build seamless and
            scalable digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
