import React from "react";
import { useParams } from 'react-router-dom';
import RandomTable from './random-table';  // Your class component

const RandomTableWithSlug = (props) => {
    const { slug } = useParams();
    return <RandomTable {...props} slug={slug} />;
};

export default RandomTableWithSlug;