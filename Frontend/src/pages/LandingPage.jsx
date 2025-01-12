import React from 'react'
import { Link } from 'react-router-dom'
import LandingNavbar from '../components/LandingNavbar'

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-[#191919] text-gray-900 dark:text-white">
      <LandingNavbar/>
     
   
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to EduDairy</h1>
        <p className="text-lg mb-8 max-w-2xl">
          Discover amazing stories, share your thoughts, and connect with writers from around the world. 
          Your journey into the world of blogging starts here.
        </p>
        
        <Link 
          to="/home" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Let's Explore
        </Link>
        
      </main>

      <footer className="bg-gray-100 dark:bg-black py-4 text-center text-gray-600 dark:text-white dark:border-t dark:border-gray-800">
        <p>Made with ❤️ by <a href="https://github.com/mohammadruman" target="_blank" rel="noopener noreferrer">Mohammad Ruman</a></p>
      </footer>
    </div>
  )
}

export default LandingPage