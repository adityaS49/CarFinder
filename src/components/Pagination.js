export default function Pagination({ total, page, setPage, perPage }) {
    const totalPages = Math.ceil(total / perPage)
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} className={`px-4 py-1 rounded border ${page === i + 1 ? 'bg-black text-white' : ''}`}>
            {i + 1}
          </button>
        ))}
      </div>
    )
  }