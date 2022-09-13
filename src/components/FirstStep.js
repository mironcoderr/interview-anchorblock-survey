import React from "react";

export default function FirstStep({ checkFeel, setCheckFeel, checkDay, setCheckDay, setSurveyStep }) {
    const feelValue = Object.values(checkFeel).includes(true);
    const dayValue = Object.values(checkDay).includes(true);
    const handleNextStep = () => { if (feelValue && dayValue) setSurveyStep(2); }

    return (
        <div className="py-12 px-11">
            <div className="mb-14">
                <h4 className="mb-3"><span className="mr-3">01.</span>How was your day?</h4>
                <div className="flex items-center justify-start gap-3 ml-8">
                    <button onClick={(e) => setCheckDay({ bad: true, okay: false, good: false })} className={`py-2 px-5 rounded-md text-sm capitalize border border-slid ${checkDay.bad ? "bg-active border-primary" : "bg-gray-content border-border-content"}`}>bad</button>
                    <button onClick={(e) => setCheckDay({ bad: false, okay: true, good: false })} className={`py-2 px-5 rounded-md text-sm capitalize border border-slid ${checkDay.okay ? "bg-active border-primary" : "bg-gray-content border-border-content"}`}>okay</button>
                    <button onClick={(e) => setCheckDay({ bad: false, okay: false, good: true })} className={`py-2 px-5 rounded-md text-sm capitalize border border-slid ${checkDay.good ? "bg-active border-primary" : "bg-gray-content border-border-content"}`}>good</button>
                </div>
            </div>
            <div className="mb-12">
                <h4 className="mb-4"><span className="mr-3">02.</span>Do you feel you’re making difference?</h4>
                <div className="flex items-center justify-start gap-3 ml-8">
                    <label htmlFor="yes" className={`relative flex items-center gap-2 py-3 pl-5 pr-7 rounded-md cursor-pointer  border border-solid ${checkFeel.yes ? "bg-active border-primary" : "border-border-content bg-gray-content"}`}>
                        <input type="checkbox" id="yes" name="survey" value="yes" className="invisible absolute" onChange={(e) => setCheckFeel({ yes: true, no: false })} />
                        <span className={`material-icons font-semibold w-4 h-4 text-center leading-4 rounded border border-solid bg-white ${checkFeel.yes ? "text-xs text-primary border-primary" : "text-0px border-border-check"}`}>check</span>
                        <small className="text-sm capitalize">yes</small>
                    </label>
                    <label htmlFor="no" className={`relative flex items-center gap-2 py-3 pl-5 pr-7 rounded-md cursor-pointer  border border-solid ${checkFeel.no ? "bg-active border-primary" : "border-border-content bg-gray-content"}`}>
                        <input type="checkbox" id="no" name="survey" value="no" className="invisible absolute" onChange={(e) => setCheckFeel({ yes: false, no: true })} />
                        <span className={`material-icons font-semibold w-4 h-4 text-center leading-4 rounded border border-solid bg-white ${checkFeel.no ? "text-xs text-primary border-primary" : "text-0px border-border-check"}`}>check</span>
                        <small className="text-sm capitalize">no</small>
                    </label>
                </div>
            </div>
            <div className="flex items-center justify-end gap-3">
                <button onClick={handleNextStep} className="font-semibold capitalize py-2 px-11 rounded-10px text-white bg-primary">next</button>
            </div>
        </div>
    )
}