import React, { useState } from 'react'

const Index = () => {

    const [state, setState] = useState({
        pin: null,
        error: null,
        response: null
    })

    const validatePIN = ( pin ) => {
        if ( !pin || pin.trim() <= 0 ) {
            return { 
                pin: `${pin}`.trim(),
                response: false,
                error: "Pin code are required" 
            }
        }
        if ( isNaN(pin) ) {
            return {
                pin: `${pin}`.trim(),
                response: false,
                error: "Only numbers are acepted" 
            }
        }
        if ( (`${pin}`).trim().length === 4 || (`${pin}`).trim().length === 6 ) {
            return {
                pin: `${pin}`.trim(),
                response: true,
                error: null 
            }
        } else {
            return { 
                pin: `${pin}`.trim(),
                response: false,
                error: "The pin code can only be 4 or 6 numbers long" 
            }
        }

    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const resp = validatePIN( state.pin );
        setState( resp )
    }

    const handleChange = ({target}) => setState( {...state, pin: target.value })

    return (
        <div className="row">
            <form className="row g-3" onSubmit={ handleSubmit }>
                <div className="col-6">
                    <label for="pincode"><b>PIN code</b></label>
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