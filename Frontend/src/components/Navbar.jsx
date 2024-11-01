import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'; // Ensure this import is included
import Footer from './Footer';

const Navbar = () => {
  const user = false; // This should ideally come from authentication state

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">Blog Market</Link>
      </h1>
      <div className="flex items-center space-x-2">
        <p><BsSearch /></p>
        <input
          className="outline-none px-3 py-1"
          placeholder="Search a post"
          type="text"
        />
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        {user ? (
          <>
            <h3><Link to="/write">Write</Link></h3>
            <h3>Profile</h3>
          </>
        ) : (
          <>
            <h3><Link to="/login">Login</Link></h3>
            <h3><Link to="/register">Register</Link></h3>
          </>
        )}
      </div>
    
    </div>
  );
};

export default Navbar;
