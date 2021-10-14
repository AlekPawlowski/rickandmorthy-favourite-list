import React from "react";
import TableInit from "./TableInit.jsx";

const ChoseCategory = ({ importType }) => {
    console.log("chosecategory", importType);
    return <TableInit importType={importType} />;
};

export default ChoseCategory;
