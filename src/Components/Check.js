import React, { useState } from 'react';
import {BsCheckSquare, BsCheckSquareFill} from 'react-icons/bs'

const Checked = (check) => {
    if(check === true){
        return ( <BsCheckSquare></BsCheckSquare>)
    }
    return ( <BsCheckSquareFill></BsCheckSquareFill>)
}

export default Checked;
