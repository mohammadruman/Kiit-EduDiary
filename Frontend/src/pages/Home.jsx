import axios from "axios";
import Footer from "../components/Footer";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";
import DarkModeToggle from "../components/DarkModeToggle";  // Import the Dark Mode Toggle component

const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      const sortedPosts = res.data.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedPosts);
      setNoResults(sortedPosts.length === 0);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#191919] text-gray-900 dark:text-white">
      <Navbar />
      <DarkModeToggle />
      <div className="px-4 py-3 md:px-16 lg:px-32 flex-grow flex flex-col items-center">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          posts.map((post) => (
            <Link
              key={post._id}
              to={user ? `/posts/post/${post._id}` : "/login"}
              className="w-full md:w-3/4 lg:w-2/3 mb-6 hover:transform hover:scale-[1.02] transition-transform"
            >
              <div className="bg-white dark:bg-[#191919] rounded-lg shadow-md hover:shadow-lg transition-all p-6 dark:border dark:border-gray-800 text-gray-900 dark:text-white">
                <HomePosts post={post} />
              </div>
            </Link>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16 text-gray-900 dark:text-white">
            No posts available
          </h3>
        )}
      </div>
      <Footer className="bg-white dark:bg-black text-gray-900 dark:text-white border-t dark:border-gray-800" />
    </div>
  );
};

export default Home;
