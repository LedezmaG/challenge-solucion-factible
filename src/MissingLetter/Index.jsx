import React, { useState } from 'react'

const Index = () => {

    const [state, setState] = useState({
        array: [],
        error: null,
        response: null
    })

    const findMissingLetter = ( letters ) => {

        const lettersSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        const onlyLetters = new RegExp('^[a-z]+', 'i');
        const upper = new RegExp('^[A-Z]+');
        let firstElement, lastElement = null;
        let result = [];


        if ( !letters || !Array.isArray(letters) ) {
            return { 
                array: letters,
                response: false,
                error: "Array required" 
            }
        }
        if ( letters.length < 2 ) {
            return {
                array: letters,
                response: false,
                error: "Array 2 characters long min" 
            }
        }
        if ( !onlyLetters.test( letters ) ) {
            return {
                array: letters,
                response: false,
                error: "Only letters" 
            }
        }
        if ( upper.test( letters ) ) {
            lettersSet.forEach( (l,i) => lettersSet[i] = l.toUpperCase() )
        }

        firstElement = lettersSet.indexOf( letters[0] );
        lastElement = lettersSet.lastIndexOf( letters[letters.length - 1] );

        lettersSet.forEach( (l,i) => {
            if ( i >= firstElement && i <= lastElement ) {
                if ( !letters.includes( l ) ) {
                    result.push( l )
                }
            }
        })

        return {
            array: letters,
            response: result,
            error: null
        }
    }

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