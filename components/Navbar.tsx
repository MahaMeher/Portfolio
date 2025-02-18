"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-blue-950 h-[60px] w-full fixed top-0 left-0 z-10 flex justify-between items-center gap-5 px-28">
      <div className="text-white hover:text-violet-400 font-extrabold font-sans italic flex ">M</div>
      <ul className="flex justify-center items-center gap-8">
        {pathname === "/resume" ?(
          <li>
            <Link href="/" className="text-white font-bold hover:text-violet-400"> Home</Link>
          </li>
        ): (
          <>
        <li>
          <Link href="#home" className="text-violet-300 font-semibold hover:underline decoration-white">Home</Link>
        </li>
        <li>
          <Link href="#contact" className="font-medium text-white hover:underline decoration-white">Contact</Link>
        </li>
        <li>
          <Link href="#projects" className="font-medium text-white hover:underline decoration-white">Projects</Link>
        </li>
        <li>
         <Link href="/resume" className="font-medium text-white hover:underline decoration-white">Resume</Link>
       </li>
        </>
        )}
         
      </ul>
    </div>
  );
};
export default Navbar;
