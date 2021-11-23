import React, { useState } from 'react'

const Index = () => {

    const [state, setState] = useState({
        num: null,
        error: null,
        response: null
    })

    const persistence = ( num ) => {
        let result = 1; 
        let ronda = 0; 
        let init = num; 


        if ( !num || num.trim() <= 0 ) {
            return { 
                num: `${num}`.trim(),
                response: false,
                error: "Number are required" 
            }
        }
        if ( num < 0 ) {
            return {
                num: `${num}`.trim(),
                response: false,
                error: "Only positive numbers are acepted" 
            }
        }
        if ( isNaN(num) ) {
            return {
                num: `${num}`.trim(),
                response: false,
                error: "Only numbers are acepted" 
            }
        }
        if ( num.length === 1 ) {
            return {
                num: `${num}`.trim(),
                response: 0,
                error: null
            }
        }
        
        do {
            String(num).split('').forEach( n => result = result * parseInt(n));
            ronda += 1;
            num = result;
            result = 1;
        } while ( num > 9 && num > 0 );

        return {
            num: init,
            response: ronda,
            error: null
        }
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const resp = persistence( state.num );
        setState( resp )
    }

    const handleChange = ({target}) => setState( {...state, num: target.value })

    return (
        <div className="row">
            <form className="row g-3" onSubmit={ handleSubmit }>
                <div className="col-6">
                    <label for="pincode"><b>Number</b></label>
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