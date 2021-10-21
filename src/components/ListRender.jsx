import React from "react";

const ListRender = ({ list, type }) => {
    const { info, results } = list;
    if (type == "character") {
        return (
            <div>
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
                                <tr
                                    key={index}
                                    className={`tabel_row tabel_row_${index}`}
                                >
                                    <td className={"img"}>
                                        <img src={ele.image}></img>
                                    </td>
                                    <td>
                                        <span>{ele.id}</span>
                                    </td>
                                    <td>
                                        <span>{ele.name}</span>
                                    </td>
                                    <td>
                                        <span>{ele.status}</span>
                                    </td>
                                    <td>
                                        <span>{ele.species}</span>
                                    </td>
                                    <td>
                                        <span>{ele.episode.length}</span>
                                    </td>
                                    <td>
                                        <span>{ele.location.name}</span>
                                    </td>
                                    <td> no</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ListRender;
