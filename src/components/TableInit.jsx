import React, { useState, useEffect } from "react";
import ListRender from "./ListRender.jsx";
import Pagination from "./Pagination.jsx";

const TableInit = ({ importType }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const fetchUrl = `https://rickandmortyapi.com/api/${importType}/?page=${currentPage}`;
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
    }, [currentPage]);

    if (isLoaded) {
        return (
            <React.Fragment>
                <Pagination
                    pages={items.info.pages}
                    currentPage={currentPage}
                    setState={setCurrentPage}
                />
                <ListRender list={items} type={importType} />
            </React.Fragment>
        );
    } else if (error) {
        return <div>Error: {error.error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }
};

export default TableInit;
