import { React, useState } from "react";
import ChoseCategory from "./components/ChoseCategory.jsx";

function App() {
    const [chosedCategory, setChosedCategory] = useState("");

    const category = ["character", "location", "episode", ""];
    console.log(chosedCategory);
    if (chosedCategory !== "") {
        return (
            <div>
                <h1>choose category</h1>
                <div>
                    {category.map((type, index) => {
                        return (
                            <button key={index} onClick={(event) => setChosedCategory(type)} >
                                {type}
                            </button>
                        );
                    })
                    }
                    <ChoseCategory importType={chosedCategory} />
                </div>

            </div>
        )
    } else {
        return (
            <div>
                <h1>choose category</h1>
                <div>
                    {category.map((type, index) => {
                        return (
                            <button key={index} onClick={(event) => setChosedCategory(type)} >
                                {type}
                            </button>
                        );
                    })
                    }
                </div>

            </div>
        )
    }
}

export default App;
