import React, { useState } from 'react'
import { findMissingLetter } from './function';

const Index = () => {

    const [state, setState] = useState({
        array: [],
        error: null,
        response: null
    })

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const resp = findMissingLetter( state.array.split('') );
        setState( resp )
    }

    const handleChange = ({target}) => setState( {...state, array: target.value })

    return (
        <div className="row">
            <form className="row g-3" onSubmit={ handleSubmit }>
                <div className="col-6">
                    <label htmlFor="letters"><b>Letters</b></label>
                    <input type="text" className="form-control my-3" id="letters" onChange={ handleChange } />
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