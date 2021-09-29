import { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList.jsx";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    console.log(isLoaded);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(res => res.json())
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
    }, []);

    if (error) {
        return <div>Error: {error.error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (isLoaded) {
        return (
            <CharacterList list={items} />
        );
    }
}

export default App;
