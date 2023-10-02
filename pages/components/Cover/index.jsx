import React from "react";

const Cover = ({ title }) => {
    return (
        <div className="w-full text-6xl text-white flex items-center justify-center h-[550px] bg-gray-100">
            <h1 className="absolute w-full h-full flex items-center justify-center bg-black/20">{ title }</h1>
            <div className="w-full h-full bg-img3"></div>
        </div>
    )
}

export default Cover;