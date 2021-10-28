import { React, useState } from "react";
import ChoseCategory from "./components/ChoseCategory.jsx";
import FavouriteList from "./components/FavouriteList.jsx";
import { Router, Link } from "@reach/router";

function App() {
    const [chosedCategory, setChosedCategory] = useState("");
    // const category = ["character", "location", "episode"];
    const category = ["character"];
    return (
        <div>
            <h1>choose category</h1>
            {category.map((type, index) => {
                return (
                    <Link key={index} to={`/${type}`}>
                        {type}
                    </Link>
                );
            })}
            <Link to="/favourite">favourite</Link>
            <Router>
                {category.map((type, index) => {
                    return (
                        <ChoseCategory
                            key={index}
                            path={`/${type}`}
                            importType={`${type}`}
                        ></ChoseCategory>
                    );
                })}
                <FavouriteList path="/favourites" />
            </Router>
        </div>
    );
}

export default App;

// {category.map((type, index) => {
//     return (
//         <button
//             key={index}
//             path={`/${type}`}
//             onClick={() => setChosedCategory(type)}
//         >
//             {type}
//         </button>
//     );
// })}
// {chosedCategory != "" && (
// )}
