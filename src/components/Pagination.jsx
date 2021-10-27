import React from "react";

const Pagination = ({ pages, currentPage, setState }) => {
    return (
        <div className="pagination">
            <button className="arrow arrow_prev">prev</button>
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
            <button className="arrow arrow_next"> next </button>
        </div>
    );
};

export default Pagination;
