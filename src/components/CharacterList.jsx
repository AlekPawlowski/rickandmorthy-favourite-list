import React from "react";
import CharacterLabel from "./CharacterLabel";

const CharacterList = ({ list }) => {
    const { info, results } = list;
    console.log(info, results, list);
    return (
        <table>
            <thead>
                <tr>
                    <td>img</td>
                    <td>name</td>
                    <td>status</td>
                    <td>species</td>
                    <td>Gender</td>
                </tr>
            </thead>
            <tbody>
                {results.map((singleData, index) => {
                    return (
                        <CharacterLabel listLabel={singleData} key={index} />
                    );
                })}
            </tbody>
        </table>
    );
};

export default CharacterList;
