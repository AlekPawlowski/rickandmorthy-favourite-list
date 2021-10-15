import { useState, useEffect } from "react";
import CharacterList from "./CharacterList.jsx";

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
        return () => console.log("unmounting...");
    }, [importType]);
    console.log("items", items);
    if (error) {
        return <div>Error: {error.error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (isLoaded) {
        return <CharacterList list={items} />;
    }
};

export default TableInit;
