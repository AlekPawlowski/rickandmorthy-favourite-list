import React from "react";

export const CharacterList = ({ list }) => {
    const { info, results } = list;
    console.log(info, results, list);
    return (
        <ul>
            {results.map((name, index) => {
                return <li key={index}>{name.name}</li>;
            })}
        </ul>
    );
};

export default CharacterList;
