import React from "react";

export default function Alert({ setError, children }) {
    return (
        <div className="max-w-700px mx-auto rounded-xl flex items-center gap-2 py-3 px-4 mb-5 text-red-deep bg-red-light">
            <i className="material-icons text-xl">error</i>
            <span className="font-semibold text-sm flex-auto">{ children }</span>
            <i className="material-icons text-xl cursor-pointer" onClick={()=> setError("")}>close</i>
        </div>
    )
}