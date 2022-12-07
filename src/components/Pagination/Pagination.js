import React from "react";
import { Link } from "react-router-dom";

function Pagination({
  cardsPerPage,
  totalCards,
  handlePaginate,
  handleNextPaginate,
  handlePrevPaginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={handlePrevPaginate}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <li>
              <Link
                className="page-link"
                onClick={() => handlePaginate(number)}
              >
                {number}
              </Link>
            </li>
          </div>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={handleNextPaginate}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
