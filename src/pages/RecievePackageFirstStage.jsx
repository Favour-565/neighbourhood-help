import React from 'react';
import  { useState } from 'react';
import RecievePackage from '../assets/css/recievepackage.module.css';
import BackArrowImg from '../assets/image/arrow.svg';

const RecievePackageFirstStage = () => {
    const [stage, setStage] = useState(1);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [quantity, setQuantity] = useState('');
    const [item, setItem] = useState('');
    const [additionalNote, setAdditionalNote] = useState('');

    const handlePrev = () => {
        setStage(stage - 1);
    };

    const handleNext = () => {
        setStage(stage + 1);
    };

    const handleSubmit = () => {
        // Handle form submission logic here
    };

    const renderStage = () => {
        switch (stage) {
            case 1:
                return (
                    <div>
                        <h3>Stage 1</h3>
                        <form>
                            <div className="flex-container">
                                <div className="half-width">
                                    <label htmlFor="height">Height of Package:</label>
                                    <select id="height" value={height} onChange={(e) => setHeight(e.target.value)}>
                                        <option value="1">1 inch</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="half-width">
                                    <label htmlFor="weight">Weight of Package:</label>
                                    <select id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}>
                                        <option value="1">1 inch</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                            </div>
                            <div className="flex-container">
                                <div className="half-width">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <select id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                        <option value="1">1</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="half-width">
                                    <label htmlFor="item">Item:</label>
                                    <input type="text" id="item" value={item} onChange={(e) => setItem(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex-container">
                                <div className="half-width">
                                    <label htmlFor="additionalNote">Additional Note:</label>
                                    <input type="text" id="additionalNote" value={additionalNote} onChange={(e) => setAdditionalNote(e.target.value)} />
                                </div>
                            </div>
                        </form>
                        <button onClick={handleNext}>Next</button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h3>Stage 2</h3>
                        <form>
                            {/* Stage 2 form content */}
                        </form>
                        <button onClick={handlePrev}>Prev</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h3>Stage 3</h3>
                        <form>
                            {/* Stage 3 form content */}
                        </form>
                        <button onClick={handlePrev}>Prev</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <h3>Stage 4</h3>
                        <form>
                            {/* Stage 4 form content */}
                        </form>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <HorizontalNonLinearStepper />
            <h1>Receive a Package</h1>
            <p>Get your package delivered</p>
            <div>
                <img src="your-image-url" alt="Package" />
                <h3>What is in the Package?</h3>
                <p>Package details offer essential insight</p>
                {renderStage()}
            </div>
        </div>
    );
};

function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    return (
        <div className="stepper-container">
            <div className="stepper">
                {steps.map((label, index) => (
                    <div key={label} className={`step ${completed[index] ? 'completed' : ''}`}>
                        <button onClick={handleStep(index)}>{label}</button>
                    </div>
                ))}
            </div>
            <div className="actions">
                {allStepsCompleted() ? (
                    <div>
                        <p>All steps completed - you're finished</p>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                ) : (
                    <div>
                        <p>Step {activeStep + 1}</p>
                        <button disabled={activeStep === 0} onClick={handleBack}>Back</button>
                        <button onClick={handleNext}>Next</button>
                        {activeStep !== steps.length &&
                            (completed[activeStep] ? (
                                <p>Step {activeStep + 1} already completed</p>
                            ) : (
                                <button onClick={handleComplete}>
                                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                </button>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecievePackageFirstStage;
