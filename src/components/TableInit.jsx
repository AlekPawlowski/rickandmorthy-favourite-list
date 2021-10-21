import React, { useState, useEffect } from "react";
import ListRender from "./ListRender.jsx";

const TableInit = ({ importType }) => {
    const [initPage, setInitPage] = useState(1);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    console.log(initPage);
    const fetchUrl = `https://rickandmortyapi.com/api/${importType}/?page=${initPage}`;
    useEffect(() => {
        fetch(fetchUrl)
            .then((res) => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                    setIsLoaded(false);
                }
            );
    }, [initPage]);

    if (error) {
        return <div>Error: {error.error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (isLoaded) {
        return (
            <React.Fragment>
                <ListRender list={items} type={importType} />

                <div className="pagination">
                    <div className="arrow arrow_prev">prev</div>
                    {Array.from(Array(items.info.pages), (e, i) => {
                        return (
                            <button
                                key={i + 1}
                                page={i + 1}
                                onClick={() => setInitPage(i + 1)}
                                className={initPage == i + 1 ? "active" : ""}
                            >
                                {i + 1}
                            </button>
                        );
                    })}
                    <div className="arrow arrow_next"> next </div>
                </div>
            </React.Fragment>
        );
    }
};

export default TableInit;
