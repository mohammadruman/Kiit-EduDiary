/* eslint-disable react/prop-types */
import { IF } from "../url";

const HomePosts = ({ post }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:space-x-4 mt-8 p-4 rounded-lg border hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out ">
      {/* Left */}
      {post.photo && (
        <div className="w-full md:w-[35%] h-[200px] flex justify-center items-center mb-4 md:mb-0">
          <img
            src={IF + post.photo}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      )}
      {/* Right */}
      <div className="flex flex-col w-full md:w-[100%]">
        <h1 className="text-lg md:text-2xl font-bold mb-2">{post.title}</h1>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <p>@{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toDateString()}</p>
            <p>{new Date(post.updatedAt).toLocaleTimeString()}</p>
          </div>
        </div>
        <p className="text-sm ">
          {post.desc.slice(0, 400) + " ...Read more"}
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
