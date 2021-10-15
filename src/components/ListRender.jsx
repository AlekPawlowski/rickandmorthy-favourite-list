import React from "react";

const ListRender = ({ list }) => {
    const { info, results } = list;
    console.log(results.length);
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(results[0]).map((ele, index) => {
                        return <td key={index}>{ele}</td>;
                    })}
                </tr>
            </thead>
            <tbody>
                {results.map((ele, index) => {
                    return (
                        <tr key={index}>
                            {Object.values(ele).map((value, i) => {
                                console.log(value);
                                if (typeof value !== "object") {
                                    return <td key={i}>{value}</td>;
                                }
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ListRender;
