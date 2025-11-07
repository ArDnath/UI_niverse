import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
const Navbar = () => {
  
  return (
    <header className="w-full border-b">
      <nav className="max-w-7xl mx-auto w-full flex flex-wrap justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className='flex gap-2  justify-center'>
        <motion.div
        initial={{opacity:0, x:-50}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8, ease: 'easeOut'}}
        >
          <img src="/logo.png" alt="ui_niverseLogo" className='w-12 h-12'/>
        

        </motion.div>
        <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          UI_niverse
        </div>
        </Link>
        
        
        
        

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ArDnath"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 fill-current hover:text-blue-500 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.304 3.438 9.799 8.207 11.387.6.11.793-.26.793-.577v-2.235c-3.338.724-4.033-1.416-4.033-1.416-.547-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.49.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.933 0-1.312.47-2.385 1.235-3.227-.125-.305-.535-1.53.116-3.184 0 0 1.007-.322 3.3 1.23a11.45 11.45 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.654 1.654.244 2.88.12 3.184.77.842 1.23 1.915 1.23 3.227 0 4.61-2.807 5.624-5.48 5.92.43.375.81 1.1.81 2.22v3.293c0 .32.19.693.8.574C20.565 22.09 24 17.6 24 12.297 24 5.67 18.627.297 12 .297z" />
            </svg>
          </a>

          {/* Twitter/X Icon */}
          <a
            href="https://x.com/AriyamanDe12_24"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6 fill-current hover:text-blue-500 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M17.365 0h4.872L14.61 9.207 24 24h-7.723L10.01 14.644 3.482 24H0l10.118-13.002L0 0h7.844l6.133 8.799L17.365 0Zm-1.14 21.88h2.063L5.41 2.07H3.222L16.225 21.88Z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;