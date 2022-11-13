import React from "react";

function Pagination({projectsPerPage, totalProjects, currentPage, setCurrentPage, loading
}) {
  const pageNumbers = [];
  const numberOfPages = Math.ceil(totalProjects / projectsPerPage);

    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i);
    }

    if (loading) {
        return null;
    }

    return (
        <>
            <div className="pagination-container">
                <div className="pagination">
                    <button
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage <= 1}
                        className="pagination-button"
                    >
                        Prev
                    </button>

                    {pageNumbers.map((number) => (
                        <button key={number} onClick={() => setCurrentPage(number)} className="pagination-button">
                            {number}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage >= numberOfPages}
                        className="pagination-button"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default Pagination;
