import { motion, AnimatePresence } from "framer-motion";
import { toast } from "material-react-toastify";
const CarModal = ({ car, onClose, wishlist, setWishlist }) => {
  if (!car) return null;
  const inWishlist = wishlist.find((item) => item.id === car.id);
  const toggleWishlist = () => {
    if (inWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== car.id));
      toast.error("Removed from Wishlist");
    } else {
      setWishlist([...wishlist, car]);
      toast.success("Added to Wishlist");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-black bg-opacity-10 z-50 flex items-center justify-center"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          key="modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white opacity-100 p-6 rounded-2xl shadow-2xl max-w-2xl w-full relative"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
          >
            &times;
          </button>

          <div className="text-3xl font-bold mb-4 text-black">{car.name}</div>

          <img
            src={car.image}
            alt={car.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
            <div>
              <strong>Brand:</strong> {car.brand}
            </div>
            <div>
              <strong>Fuel Type:</strong> {car.fuel}
            </div>
            <div>
              <strong>Transmission:</strong> {car.transmission}
            </div>
            <div>
              <strong>Mileage:</strong> {car.mileage} km/l
            </div>
            <div>
              <strong>Seats:</strong> {car.seats}
            </div>
            <div>
              <strong>Price:</strong> ${car.price}
            </div>
            {car.description && (
              <div className="col-span-2">
                <strong>Description:</strong> {car.description}
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => toggleWishlist(car)}
              className="bg-green-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium shadow"
            >
              ❤️{inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CarModal;
