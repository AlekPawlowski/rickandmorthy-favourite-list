import { useState, useEffect } from "react";
import ListRender from "./ListRender.jsx";

const TableInit = ({ importType }) => {
    const fetchUrl = `https://rickandmortyapi.com/api/${importType}/`;
    const [error, setError] = useState(null);
    const [isLoaded = false, setIsLoaded] = useState(false);
    const [items = [], setItems] = useState([]);

    //use effect dosent work on rerun
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
    }, [importType]);

    if (error) {
        return <div>Error: {error.error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (isLoaded) {
        return <ListRender list={items} />;
    }
};

export default TableInit;
