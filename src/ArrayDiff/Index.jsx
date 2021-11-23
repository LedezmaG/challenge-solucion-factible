import React, { useState } from 'react'

const Index = () => {

    const [state, setState] = useState({
        set1: [],
        set2: [],
        error: null,
        response: null
    })

    const arrayDiff = ( set1, set2 ) => {

        let result = [];

        if ( (!set1 && !set2) || (!Array.isArray(set1) && !Array.isArray(set2)) ) {
            return { 
                set1,
                set2,
                response: false,
                error: "Array required" 
            }
        }
        if ( set1.length < 2 ) {
            return {
                set1,
                set2,
                response: false,
                error: "Array 2 characters long min" 
            }
        }
        set1.forEach( i => {
            if ( isNaN(i) ) {
                return {
                    set1,
                    set2,
                    response: false,
                    error: "Only numbers are acepted" 
                }
            }
        })
        set2.forEach( i => {
            if ( isNaN(i) ) {
                return {
                    set1,
                    set2,
                    response: false,
                    error: "Only numbers are acepted" 
                }
            }
        })
        
        set2.forEach( i => {
            result = set1.filter( j => {
                if (j !== i ) {
                    return i;
                }
            })
        })

        return {
            set1,
            set2,
            response: result,
            error: null
        }
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        const resp = arrayDiff( state.set1.split(''), state.set2.split('') );
        setState( resp )
    }

    const handleChange = ({target}) => setState( {...state, [target.name]: target.value })

    return (
        <div className="row">
            <form className="row g-3" onSubmit={ handleSubmit }>
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