const Loader = ({ size = 10, color = "#2d2d2e" }) => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className={`inline w-${size} h-${size} mr-2 text-gray-200 animate-spin`}
        fill={color}
        viewBox="0 0 100 101"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG Paths */}
      </svg>
    </div>
  );
};
export default Loader
