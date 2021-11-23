import React, { useState } from 'react'
import { validatePIN } from './function';

const Index = () => {

    const [state, setState] = useState({
        pin: null,
        error: null,
        response: null
    })

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const resp = validatePIN( state.pin );
        setState( resp )
    }

    const handleChange = ({target}) => setState( {...state, pin: target.value })

    return (
        <div className="row">
            <form className="row g-3" onSubmit={ handleSubmit }>
                <div className="col-12">
                    <p> 
                        <b>Validate Pin</b> <br /> 
                        ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. 
                    </p>
                </div>
                <div className="col-6">
                    <label htmlFor="pincode"><b>PIN code</b></label>
                    <input type="text" className="form-control my-3" id="pincode" onChange={ handleChange } />
                    <button type="submit" className="btn btn-primary ">Send</button>
                </div>
                <div className="col-6">
                    <b>Response</b>
                    <pre>
                        <code data-lang="html">
                            { JSON.stringify( state, null, 2 )  }
                        </code>
                    </pre>
                </div>
            </form>
        </div>
    )
}

export default Index