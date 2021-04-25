import React from "react";
import PropTypes from 'prop-types';

export const CenterVH = ({children}) => {
    return <div className={`justify-center items-center content-center my-4`}>{children}</div>
}

CenterVH.propTypes = {
    children: PropTypes.node,
}