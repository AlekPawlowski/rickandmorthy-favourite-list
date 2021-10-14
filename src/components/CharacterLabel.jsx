import React from "react";

const CharacterLabel = ({ listLabel }, key) => {
    const { image, name, status, species, gender } = listLabel;
    return (
        <tr key={key}>
            <td>
                <img src={image}></img>
            </td>
            <td>
                <span>{name}</span>
            </td>
            <td>
                <span>{status}</span>
            </td>
            <td>
                <span>{species}</span>
            </td>
            <td>
                <span>{gender}</span>
            </td>
        </tr>
    );
};

export default CharacterLabel;
