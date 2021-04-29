import React from "react";
import './PageWrapper.css'


const PageWrapper = (props) => {
    return <main className="wrapper">{props.children}</main>;
};

export default PageWrapper;