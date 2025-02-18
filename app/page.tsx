
import Skills from "../components/Skills"
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
    <section id="home" className="w-full bg-violet-400 bg-opacity-40 h-[500px] flex flex-col justify-center items-center text-center p-60">
      <h1 className="text-5xl font-extrabold transform transition-all duration-700 animate-slide-in mt-10">I&apos;m <span className="text-blue-950">MAHA</span></h1>
      <h2 className="text-3xl font-bold mt-5 transform transition duration-75 hover:scale-110">React Developer</h2>
      <p className="text-2xl max-w-2xl mt-5 transform transition duration-500 hover:rotate-2">I am a frontend developer with expertise in React and Next.js. 
        I specialize in building modern, responsive, and user-friendly web applications.
         Passionate about clean code and intuitive UI/UX, I strive to create seamless digital experiences.</p>
        <div className="mt-10">
          <a href="/Maha_Meher-CV.pdf" download="MahaMeher_Resume.pdf"
          className="py-3 px-6 bg-blue-950 text-white rounded-lg font-semibold hover:text-violet-400">Download Resume</a>
        </div>
    </section>

    <div className="mx-8 border-t-2 border-violet-300"></div>

    <Skills/>
    <div className="mx-8 border-t-2 border-violet-300"></div>
    <Projects/>
    <div className="mx-8 border-t-2 border-violet-300"></div>

    <Contact/>
    <div className="mx-8 border-t-2 border-violet-200"></div>
    <Footer/>
    </div>

  );
}
