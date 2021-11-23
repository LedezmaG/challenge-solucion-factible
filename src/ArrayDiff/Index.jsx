import React, { useState } from 'react'
import { arrayDiff } from './function';

const Index = () => {

    const [state, setState] = useState({
        set1: [],
        set2: [],
        error: null,
        response: null
    })

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( state.set1.length <= 0 || state.set2.length <= 0 ) {
            return setState({ ...state,
                response: false,
                error: "Array required" 
            })
        }
        const resp = arrayDiff( state.set1.split(''), state.set2.split('') );
        setState( resp )
    }

    const handleChange = ({target}) => setState( {...state, [target.name]: target.value })

    return (
        <div className="row">
            <form className="row g-3" onSubmit={ handleSubmit }>
                <div className="col-12">
                    <p> 
                        <b> Array difference</b> <br /> 
                        Implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order.
                    </p>
                </div>
                <div className="col-6">
                    <label htmlFor="set1"><b>Set 1</b></label>
                    <input type="text" className="form-control my-3" id="set1" name="set1" onChange={ handleChange } />
                    <br />
                    <label htmlFor="set2"><b>Set 2</b></label>
                    <input type="text" className="form-control my-3" id="set2" name="set2" onChange={ handleChange } />
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