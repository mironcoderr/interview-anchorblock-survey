import React from "react";

export default function StepTitle({ surveyStep }) {
    return (
        <div className="py-6 px-14 border-b border-solid border-border-divide">
            <ul className="h-14 flex items-center justify-center rounded-md border border-solid border-border-step">
                <li className="flex items-center justify-center gap-4 pr-7 relative step-direction">
                    {(surveyStep > 1) ? <i className="material-icons text-35px font-black text-green">check</i> : <h2 className="t text-gray-number">1</h2>}
                    <h3 className="capitalize">your feedback</h3>
                </li>
                <li className="flex items-center justify-center gap-4 px-7 relative step-direction">
                    {(surveyStep > 2) ? <i className="material-icons text-35px font-black text-green">check</i> : <h2 className={`text-gray-number ${(surveyStep < 2) ? "opacity-30" : ""}`}>2</h2>}
                    <h3 className={`capitalize ${(surveyStep < 2) ? "opacity-30" : ""}`}>your information</h3>
                </li>
                <li className="flex items-center justify-center gap-4 pl-7">
                    {(surveyStep > 3) ? <i className="material-icons text-35px font-black text-green">check</i> : <h2 className={`text-gray-number ${(surveyStep < 3) ? "opacity-30" : ""}`}>3</h2>}
                    <h3 className={`capitalize ${(surveyStep < 3) ? "opacity-30" : ""}`}>confirmation</h3>
                </li>
            </ul>
        </div>
    )
}