const SkeletonLoader = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="w-full p-4 border border-gray-200 rounded-2xl shadow bg-white"
          >
            <div className="h-48 mb-4 rounded-xl shimmer"></div>
            <div className="h-4 mb-2 rounded w-3/4 shimmer"></div>
            <div className="h-4 mb-2 rounded w-2/4 shimmer"></div>
            <div className="h-4 rounded w-5/6 shimmer"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SkeletonLoader;
  