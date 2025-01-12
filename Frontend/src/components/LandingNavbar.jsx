import React from 'react'
import DarkModeToggle from "../components/DarkModeToggle";
import { Link , useLocation } from 'react-router-dom'
import { HomeIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { FaXTwitter } from 'react-icons/fa6'

const LandingNavbar = () => {
    const pathname = useLocation().pathname;
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
      };
  return (
    <nav className='w-full py-6 flex justify-center fixed top-0 z-50'>
      <div className="rounded-full w-[300px] max-lg:w-[800px] max-[400px]:w-[345px] max-[450px]:w-[400px] max-[350px]:w-[330px] max-[321px]:w-[310px] px-2 py-1 bg-white/5 backdrop-blur-lg flex items-center justify-center dark:shadow-none">
        <div className='flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all'>

          <Link to="/" className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
            <HomeIcon className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`} />
          </Link>

          <a href="https://github.com/mohammadruman" target='_blank' rel="noopener noreferrer" className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
            <GitHubLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
          </a>

          <a href="https://x.com/intent/follow?screen_name=rumanharis" target='_blank' rel="noopener noreferrer" className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
            <FaXTwitter className='w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
          </a>

          <a href="https://www.linkedin.com/in/mohammadruman/" target='_blank' rel="noopener noreferrer" className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300'>
            <LinkedInLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
          </a>

          

        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar