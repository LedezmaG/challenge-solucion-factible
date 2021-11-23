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
                <div className="col-12">
                    <p> 
                        <b>Find the missing letter</b> <br /> 
                        Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array. You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case. (Use the English alphabet with 26 letters!)
                    </p>
                </div>
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