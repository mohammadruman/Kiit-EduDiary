const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Social Links */}
          <div className="flex gap-6 text-gray-700 dark:text-gray-300">
            <a 
              href="https://github.com/mohammadruman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://your-portfolio-url.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Portfolio
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Made with ♥ by{' '}
            <a 
              href="https://github.com/mohammadruman"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Mohammad Ruman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;