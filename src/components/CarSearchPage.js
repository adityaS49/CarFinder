"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import SearchFilters from "./SearchFilters";
import CarCard from "./CarCard";
import Wishlist from "./WishList";
import Pagination from "./Pagination";
import CarModal from "./CarModal";
import { motion, AnimatePresence } from "framer-motion";
export default function CarSearchPage() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    brand: "",
    fuel: "",
    minPrice: 0,
    maxPrice: 100000,
    seats: "",
    sort: "",
  });
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const query = `?brand=${filters.brand}&fuel=${filters.fuel}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&seats=${filters.seats}&sort=${filters.sort}`;
        const res = await fetch(`/api/cars${query}`);
        const data = await res.json();
        setCars(data);
      } catch (err) {
        setError("Failed to fetch cars");
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, [filters]);

  const carsPerPage = 10;
  const paginatedCars = cars.slice(
    (page - 1) * carsPerPage,
    page * carsPerPage
  );

  return (
    <div
      className={`${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
      } h-full min-h-screen p-4 transition-colors duration-500`}
    >
      {/* Navbar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Car Finder</h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded"
          >
            Toggle Dark Mode
          </button>
          <button
            onClick={() => setShowWishlist((prev) => !prev)}
            className="p-2 rounded border relative"
          >
            <Heart className="w-5 h-5 text-red-500" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Filters */}
      <SearchFilters filters={filters} setFilters={setFilters} />

      {/* Main Content */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {/* Car List */}
          <div className="relative">
            {paginatedCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {paginatedCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onClick={setSelectedCar}
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-red-500 font-semibold my-10">
                😕 Oops! No cars found matching your filters.
              </div>
            )}
            <CarModal wishlist={wishlist}
            setWishlist={setWishlist} car={selectedCar} onClose={() => setSelectedCar(null)} />
          </div>

          {/* Pagination */}
          <Pagination
            total={cars.length}
            page={page}
            setPage={setPage}
            perPage={carsPerPage}
          />

          {/* Wishlist Section with Transition */}
          {showWishlist && (
            <AnimatePresence>
              <motion.div
                key="wishlist-backdrop"
                className="fixed inset-0 bg-black bg-opacity-10 z-50 flex items-center justify-center"
                onClick={() => setShowWishlist(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  key="wishlist-modal"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white p-6 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto relative"
                >
                  <button
                    onClick={() => setShowWishlist(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                  >
                    &times;
                  </button>
                  <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
                  <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
          
        </>
      )}
    </div>
  );
}
