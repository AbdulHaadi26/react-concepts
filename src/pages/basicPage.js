import React from "react";
import StyledComponents from "../components/styledComponents";
import UseReducerImplementation from '../components/useReducer';
import UseStateImplementation from '../components/useState';

const BasicPage = () => {
    return (
        <>
            <UseStateImplementation />
            <UseReducerImplementation />
            <StyledComponents />
        </>
    )
}

export default BasicPage;