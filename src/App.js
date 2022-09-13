import React, { useState } from "react";
import { StepTitle, FirstStep, SecondStep, ThirdStep, Alert } from "./components";

export default function App() {
    const [surveyStep, setSurveyStep] = useState(1);
    const [checkDay, setCheckDay] = useState({ bad: false, okay: false, good: false });
    const [checkFeel, setCheckFeel] = useState({ yes: false, no: false });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    return (
        <>
            <h1 className="text-center capitalize mb-40 py-105px text-white bg-dark">survey</h1>
            { error ? <Alert setError={ setError } >{ error }</Alert> : "" }
            <div className="max-w-700px mb-40 mx-auto rounded-20px bg-white">
                <StepTitle surveyStep={ surveyStep } />
                {(surveyStep === 1) &&
                    <FirstStep
                        checkDay={checkDay}
                        checkFeel={checkFeel}
                        setCheckDay={setCheckDay}
                        setCheckFeel={setCheckFeel}
                        setSurveyStep={setSurveyStep}
                        setError={setError}
                    />
                }
                {(surveyStep === 2) &&
                    <SecondStep
                        name={name}
                        email={email}
                        setName={setName}
                        setEmail={setEmail}
                        setSurveyStep={setSurveyStep}
                        setError={setError}
                    />
                }
                {(surveyStep === 3) && <ThirdStep />}
            </div>
        </>
    )
}