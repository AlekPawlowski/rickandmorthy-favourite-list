import { React, useState } from "react";
import ChoseCategory from "./components/ChoseCategory.jsx";

function App() {
    const [chosedCategory, setChosedCategory] = useState("");
    // const category = ["character", "location", "episode"];
    const category = ["character"];
    return (
        <div>
            <h1>choose category</h1>
            <div>
                {category.map((type, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setChosedCategory(type)}
                        >
                            {type}
                        </button>
                    );
                })}
                {chosedCategory != "" && (
                    <ChoseCategory importType={chosedCategory} />
                )}
            </div>
        </div>
    );
}

export default App;
