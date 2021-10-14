import { useState, useEffect } from "react";
import ChoseCategory from "./components/ChoseCategory.jsx";

function App() {
    const category = ["characters", "locations", "episodes"];
    return (
        <React.StrictMode>

            <h1>choose category</h1>
            <div>
                {category.map((singleData, index) => {
                    return (
                        <CharacterLabel listLabel={singleData} key={index} />
                    );
                })
                }
            </div>
        </React.StrictMode>
    )
}

export default App;
