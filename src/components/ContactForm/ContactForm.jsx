import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {

    // formspree code
    const [state, handleSubmit] = useForm("123xyz");

    if (state.succeeded) {
        return <p>Thank you for contacting FutureProofME!</p>;
    }

    return (
        <body className="mt-10 flex min-h-screen">
        <form className="pl-20 pt-20 ml-20 mt-20 w-3/5" onSubmit={handleSubmit}>
        <h1 className="text-indigo-900 text-3xl text-center font-bold ml-20 pl-20 pb-3">
        Contact Us</h1>
        <h2 className="text-indigo-400 text-xl text-center font-bold ml-20 pl-20 pb-5">
        Got questions? Complete the form below and we will get back to you within 48 hours!</h2>
            
            <div className="contact-form">
                
                <div className="flex items-center mb-6">
                <div className="md:w-1/3">
                    <label className ="block text-indigo-900 font-bold md:text-right mb-1 md:mb-0 pr-4"> Your Name:</label>
                </div>

                <div className="md:w-2/3">
                    <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="name-text"
                        type="text"
                        placeholder="Enter your name"
                    />     
                </div>
                </div>

                <div className="flex items-center mb-6">
                    <div className="md:w-1/3">
                        <label className ="block text-indo-900 font-bold  md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">Email:</label>
                    </div>

                    <div className="md:w-2/3">
                        <input className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="email"
                        type="email" 
                        name="email"
                        placeholder="Enter your email address"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    /> 
                    </div>

                </div>
                <div className="flex items-center mb-6">
                    <div className="md:w-1/3">
                    <label className ="block text-indo-900 font-bold  md:text-right mb-1 md:mb-0 pr-4">Message:</label> 
                    </div>

                    <div className="md:w-2/3">                   
                    <textarea className ="bg-indigo-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="message"
                    name="message"
                    placeholder="Enter your message..."
                    />
                    </div>   

                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />  
                </div>
            </div>

            <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
            <button className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded" type="submit" disabled={state.submitting}>
            Submit
            </button>
            </div>
            </div>
            

        </form>
        </body>
    );
}

    export default ContactForm;