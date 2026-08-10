const Pagination = () => {
  return (
    <></>
    // <div className="flex items-center justify-center gap-2 mt-4">
    //   <button
    //     onClick={() => onPageChange(page - 1)}
    //     disabled={page === 0}
    //     className="px-3 py-1 border rounded disabled:opacity-50"
    //   >
    //     Previous
    //   </button>

    //   {Array.from({ length: totalPages }, (_, index) => (
    //     <button
    //       key={index}
    //       onClick={() => onPageChange(index)}
    //       className={`px-3 py-1 rounded ${
    //         page === index
    //           ? "bg-blue-600 text-white"
    //           : "border"
    //       }`}
    //     >
    //       {index + 1}
    //     </button>
    //   ))}

    //   <button
    //     onClick={() => onPageChange(page + 1)}
    //     disabled={page === totalPages - 1}
    //     className="px-3 py-1 border rounded disabled:opacity-50"
    //   >
    //     Next
    //   </button>
    // </div>
  );
};

export default Pagination;
