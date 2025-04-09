export default function Wishlist({ wishlist, setWishlist }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlist.map((car) => (
            <div
              key={car.id}
              className="border p-3 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between bg-white"
            >
              <div className="flex items-center justify-center mb-2">
                <img
                  src={car.image}
                  alt={car.name}
                  className="max-h-full object-contain"
                />
              </div>

              <div className="space-y-1 text-sm">
                <h3 className="font-semibold text-gray-800">{car.name}</h3>
                <p className="text-gray-600">
                  {car.brand} | {car.fuel}
                </p>
                <p className="text-gray-800 font-medium">
                  ${car.price.toLocaleString()}
                </p>
              </div>

              <button
                onClick={() =>
                  setWishlist(wishlist.filter((item) => item.id !== car.id))
                }
                className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
