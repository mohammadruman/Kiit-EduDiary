import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to BlogVerse</h1>
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

      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-gray-600">© 2024 BlogVerse. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage