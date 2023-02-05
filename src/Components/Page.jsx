import React from 'react';
import { useParams } from "react-router-dom";

const Page = () => {
    const {parameter}= useParams();
    const showMessage= ()=>
    {
        if(isNaN(+`${parameter}`)){
            return (
                <h1>{`The word is: ${parameter}`}</h1>
            )
        }
        else{
            return (
                <h1>{`The number is: ${parameter}`}</h1>
            )
        }
    }
    return (
        <div>
            {showMessage()}
        </div>
    );
}

export default Page;