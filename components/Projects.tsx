export default function Projects() {
     const projects = [
    { title: "Recipe Management System", link: "https://your-recipe-site.com" },
    { title: "Portfolio Website", link: "https://your-portfolio.com" },
    { title: "E-Commerce Store", link: "https://your-store.com" },
     ];
  return (
    <section
      id="projects"
      className="w-full bg-violet-400 bg-opacity-35 h-screen md:h-1/2 py-24 px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center transform transition-all duration-500 animate-slide-in">
        <h1 className="text-4xl font-bold text-blue-950 mb-6 flex justify-center">
          My Work
        </h1>
        <p className="text-lg text-black text-center px-60">
          &quot;Every project is a new challenge, a new opportunity to create
          something impactful. I love transforming ideas into seamless digital
          experiences. Here are some of my works!&quot;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-24">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-105">
                <h2 className="text-black text-xl font-semibold mb-2 ">{project.title}</h2>
                <a href={project.link}
                target="blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 text-blue-950 shadow rounded-lg">Visit Site</a>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-blue-950 mt-16 transform hover:translate-x-10">In Progress...</h1>
      </div>
    </section>
  );
}
