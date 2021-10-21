import React from "react";

const Pagination = ({ pages, currentPage, setState }) => {
    return (
        <div className="pagination">
            <div className="arrow arrow_prev">prev</div>
            {Array.from(Array(pages), (e, i) => {
                return (
                    <button
                        key={i + 1}
                        page={i + 1}
                        onClick={() => setState(i + 1)}
                        className={currentPage == i + 1 ? "active" : ""}
                    >
                        {i + 1}
                    </button>
                );
            })}
            <div className="arrow arrow_next"> next </div>
        </div>
    );
};

export default Pagination;
