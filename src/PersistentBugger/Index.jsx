import React, { useState } from 'react'
import { persistence } from './function';

const Index = () => {

    const [state, setState] = useState({
        num: null,
        error: null,
        response: null
    })
 
    const handleSubmit = ( e ) => {
        e.preventDefault();
        const resp = persistence( 4 );
        console.log( resp );
        // const resp = persistence( state.num );
        setState( resp )
    }

    const handleChange = ({target}) => setState( {...state, num: target.value })

    return (
        <div className="row">
            <form className="row g-3" onSubmit={ handleSubmit }>
                <div className="col-6">
                    <label htmlFor="number"><b>Number</b></label>
                    <input type="text" className="form-control my-3" id="number" onChange={ handleChange } />
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