export default function SearchFilters({ filters, setFilters }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
      <select
        value={filters.brand}
        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
        className="border p-2 rounded"
      >
        <option className="text-black" value="">Select Brand</option>
        <option className="text-black" value="Toyota">Toyota</option>
        <option className="text-black" value="Honda">Honda</option>
        <option className="text-black" value="Hyundai">Hyundai</option>
        <option className="text-black" value="Kia">Kia</option>
      </select>
      <select
        onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
        className="border p-2 rounded"
      >
        <option className="text-black" value="">
          Fuel Type
        </option>
        <option className="text-black" value="Petrol">
          Petrol
        </option>
        <option className="text-black" value="Diesel">
          Diesel
        </option>
        <option className="text-black" value="Electric">
          Electric
        </option>
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
        className="border p-2 rounded "
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
        className="border p-2 rounded "
      >
        <option value="">Sort by Price</option>
        <option className="text-black" value="lowToHigh">
          Price: Low to High
        </option>
        <option className="text-black" value="highToLow">
          Price: High to Low
        </option>
      </select>
    </div>
  );
}
