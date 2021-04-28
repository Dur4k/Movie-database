import React from "react";

const Pagination = ({ setPage, page, numbOfPages }) => {
  const pageNext = (page) => {
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const pagePrevius = (page) => {
    setPage(page - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="flex justify-end px-4 sm:px-14 sm:mr-9  sm:-mt-14 sm:mb-10 py-5 -mt-10">
        <div className={`button-tag cursor-pointer ${page === 1 ? "hidden" : ""}`} onClick={() => pagePrevius(page)}>
          previous
        </div>
        <div className={`button-tag cursor-pointer ${numbOfPages === page ? "hidden" : ""}`} onClick={() => pageNext(page)}>
          next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
