const Footer = () => {
  return (
    <>
      <div className="w-full bg-white-100 dark:bg-gray-900 px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8">
  <div className="flex flex-col text-gray-700 dark:text-gray-300">
    <p>Featured Blogs</p>
    <p>Most Viewed</p>
    <p>Readers' Choice</p>
  </div>
  <div className="flex flex-col text-gray-700 dark:text-gray-300">
    <p>Forum</p>
    <p>Support</p>
    <p>Recent Posts</p>
  </div>
  <div className="flex flex-col text-gray-700 dark:text-gray-300">
    <p>Privacy Policy</p>
    <p>About Us</p>
    <p>Terms & Conditions</p>
    <p>Terms of Service</p>
  </div>
</div>
<p className="text-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 text-sm py-4">
Made with ♥ by  <a href="https://github.com/mohammadruman" target="_blank" rel="noopener noreferrer">Mohammad Ruman</a>

</p>

    </>
  );
};

export default Footer;
