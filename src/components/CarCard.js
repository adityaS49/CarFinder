import { toast } from "material-react-toastify";
export default function CarCard({ car, wishlist, setWishlist, onClick }) {
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
    <div
      
      className="border p-4 rounded shadow hover:shadow-lg transition"
    >
      <div onClick={() => onClick(car)}>
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-contain mb-2"
        />

        <h2 className="font-bold text-lg">{car.name}</h2>
        <p>Brand: {car.brand}</p>
        <p>Price: ${car.price}</p>
        <p>Fuel: {car.fuel}</p>
        <p>Seats: {car.seats}</p>
      </div>
      <button
        onClick={toggleWishlist}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
}
