import React from "react";
import './mainSpace.css'
import { LeftSpace } from "./leftSpace/leftSpace";
import { RightSpace } from "./rightSpace/rightSpace";

function MainSpace () {
    return (
        <div className="main_space_wrap">
            <LeftSpace />
            <RightSpace />
        </div>
    )
}

export { MainSpace }