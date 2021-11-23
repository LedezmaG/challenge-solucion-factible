
export const arrayDiff = ( set1, set2 ) => {

    let result = [];

    if ( !set1.length > 0 || !set2.length > 0 ) {
        return { 
            set1,
            set2,
            response: false,
            error: "Array required" 
        }
    }
    if ( !Array.isArray(set1) || !Array.isArray(set2) ) {
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
        result = ( result.length > 0 ? result : set1 ).filter( j => {
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