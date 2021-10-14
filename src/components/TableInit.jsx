import { useState, useEffect } from "react";
import CharacterList from "./CharacterList.jsx";

const TableInit = ({ importType }) => {
    const [error, setError] = useState(null);
    const [isLoaded = false, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const fetchUrl = `https://rickandmortyapi.com/api/${importType}/`;
    console.log(fetchUrl, importType, isLoaded);

    //use effect dosent work on rerun
    useEffect(() => {
        fetch(fetchUrl)
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(isLoaded);
                    setItems(result);
                    setIsLoaded(true);
                },
                (error) => {
                    console.log(error);
                    setError(error);
                    setIsLoaded(false);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (isLoaded) {
        return <CharacterList list={items} />;
    }
};

export default TableInit;
