import React from "react";

export default function SecondStep({ setError, name, setName, email, setEmail, setSurveyStep }) {
    const handleNextStep = () => {
        if(!name && !email) setError("Please fill in all information fields");
        else if(!email) setError("Please fill in email information fields");
        else if(!name) setError("Please fill in name information fields");
        else {
            setError("");
            setSurveyStep(3);
        }
    }
    const handleBackStep = () => {
        setError("");
        setSurveyStep(1);
    }

    return (
        <div className="py-12 px-11">
            <div className="mb-12">
                <h4 className="mb-3"><span className="mr-3">01.</span>Your Name</h4>
                <div className="ml-8">
                    <input 
                        type="text" 
                        value={ name }
                        placeholder="John doe" 
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-50px rounded-5px px-5 border border-solid
                        border-border-content placeholder:text-gray-placeholder" 
                    />
                </div>
            </div>
            <div className="mb-12">
                <h4 className="mb-3"><span className="mr-3">02.</span>Your Email</h4>
                <div className="ml-8">
                    <input 
                        type="email" 
                        value={ email }
                        placeholder="john@gmail.com" 
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-50px rounded-5px px-5 border border-solid 
                        border-border-content placeholder:text-gray-placeholder" 
                    />
                </div>
            </div>
            <div className="flex items-center justify-end gap-3">
                <button onClick={ handleBackStep } className="font-semibold capitalize py-2 px-11 rounded-10px bg-gray-btn">back</button>
                <button onClick={ handleNextStep } className="font-semibold capitalize py-2 px-11 rounded-10px text-white bg-primary">next</button>
            </div>
        </div>
    )
}