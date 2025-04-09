export default function SearchFilters({ filters, setFilters }) {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
      <select
        value={filters.brand}
        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
        className="border p-2 rounded"
      >
        <option value="">Select Brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Kia">Kia</option>
      </select>
      <select
        onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
        className="border p-2 rounded"
      >
        <option value="">Fuel Type</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>
      <input
        type="number"
        placeholder="Min Price"
        onChange={(e) =>
          setFilters({ ...filters, minPrice: Number(e.target.value) })
        }
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: Number(e.target.value) })
        }
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Seating Capacity"
        onChange={(e) =>
          setFilters({ ...filters, seats: Number(e.target.value) })
        }
        className="border p-2 rounded"
      />
      <select
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        className="border p-2 rounded"
      >
        <option value="">Sort by Price</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
}
