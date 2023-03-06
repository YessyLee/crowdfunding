import React from "react";

// Import CSS

// Components
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

function RegistrationPage() {
    return (
        <>
        <div className="">
            <h1>Sign Up</h1>
            <h3>Sign up today to donate or to create your first FutureProofME campaign! </h3>
        </div>
        <RegistrationForm />
        </>
    );
}

export default RegistrationPage;
