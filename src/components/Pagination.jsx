import React from "react";

const Pagination = ({ pages, currentPage, setState }) => {
    console.log("currentPage", currentPage);
    const pageChanger = (param) => {
        if (currentPage == 1 && param == -1) {
            currentPage = pages + 1;
        } else if (currentPage == pages) {
            currentPage = 0;
        }
        console.log(param, currentPage);
        setState(currentPage + param);
    };
    return (
        <div className="pagination">
            <button
                className="arrow arrow_prev"
                onClick={() => pageChanger(-1)}
            >
                prev
            </button>
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
            <button className="arrow arrow_next" onClick={() => pageChanger(1)}>
                next
            </button>
        </div>
    );
};

export default Pagination;
