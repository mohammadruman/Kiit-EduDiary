const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#191919] py-8">
    {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Links - Left Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Company</h3>
          <div className="flex flex-col space-y-2">
            <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
            <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
            <a href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
          </div>
        </div>

        {/* Categories - Middle Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Categories</h3>
          <div className="flex flex-col space-y-2">
            <a href="/category/technology" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Technology</a>
            <a href="/category/lifestyle" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Lifestyle</a>
            <a href="/category/travel" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Travel</a>
            <a href="/category/food" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Food</a>
          </div>
        </div>

        {/* Social Media & Newsletter - Right Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect With Us</h3>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://twitter.com/rumanharis" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
            </a>
            <a href="https://linkedin.com/in/mohammadruman" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
            </a>
          
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Subscribe to our newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright Footer */}
    <div className="mt-8 border-t border-gray-200 dark:border-gray-700">
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 pt-4">
        Made with ♥ by <a 
          href="https://github.com/mohammadruman" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white"
        >
          Mohammad Ruman
        </a>
      </p>
    </div>
  </footer>

  );
};

export default Footer;