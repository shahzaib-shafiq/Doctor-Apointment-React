import React from 'react'
import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

function Spinner() {
    return (
        <div className='d-flex justify-center spinner'>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
