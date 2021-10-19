import React from "react";

const ListRender = ({ list }) => {
    const { info, results } = list;
    console.log(results, info);
    return (
        <table>
            <thead>
                <tr>
                    <td>Picture</td>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Spieces</td>
                    <td>Episodes</td>
                    <td>location</td>
                    <td>is favourite</td>
                </tr>
            </thead>
            <tbody>
                {results.map((ele, index) => {
                    return (
                        <CharacterRender
                            key={index}
                            index={index}
                            elementToRender={ele}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

const CharacterRender = ({ index, elementToRender }) => {
    let rowClassName = `tabel_row table_row_${index}`;
    let ele = elementToRender;
    let alt = `picture-${ele.name}`;
    return (
        <tr key={index} className={rowClassName}>
            <td>
                <img src={ele.image} altName={alt}></img>
            </td>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.status}</td>
            <td>{ele.species}</td>
            <td>{ele.episode.length}</td>
            <td>{ele.location.name}</td>
            <td>is favourite</td>
        </tr>
    );
};

export default ListRender;
