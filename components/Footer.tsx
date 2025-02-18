export default function Footer(){
    return(
        <footer className="w-full bg-blue-950 text-white py-6" >
            <div className="flex flex-col mx-auto justify-between items-center px-4">
                <div className="text-center">
                <p className="text-lg">Made BY Maha</p>
                <p className="text-sm">&copy;{new Date().getFullYear()}.All rights reserved</p>
            </div>
            <div className="flex space-x-6 mt-4">
                <a href="https://www.linkedin.com/in/maha-meher-418892320/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-500">Linkedin</a>
                <a href="https://github.com/MahaMeher" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-500">GitHub</a>
                <a href="mailto:mahameherrr@gmail.com" className="text-white hover:text-gray-400 transition-colors duration-500">Email</a>
            </div>
            </div>
        </footer>
    )
}