import React from 'react'
import { useState, CSSProperties } from "react";
import { ClipLoader,SquareLoader,GridLoader } from "react-spinners";

function Spinner() {
    return (
        <div className='d-flex justify-center'>
            <GridLoader />
        </div>
    )
}

export default Spinner
