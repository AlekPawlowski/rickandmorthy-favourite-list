import React, { useState, useEffect } from "react";
import ListRender from "./ListRender.jsx";
import Pagination from "./Pagination.jsx";

const TableInit = ({ importType }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    console.log(currentPage);
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

    if (error) {
        return <div>Error: {error.error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (isLoaded) {
        return (
            <React.Fragment>
                <ListRender list={items} type={importType} />
                <Pagination
                    pages={items.info.pages}
                    currentPage={currentPage}
                    setState={setCurrentPage}
                />
            </React.Fragment>
        );
    }
};

export default TableInit;
