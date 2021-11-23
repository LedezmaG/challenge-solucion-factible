
export const persistence = ( num ) => {

    let result = 1; 
    let ronda = 0; 
    let init = num; 

    if ( !num ) {
        return { 
            num: num,
            response: false,
            error: "Number are required" 
        }
    }
    if ( num < 0 ) {
        return {
            num: num,
            response: false,
            error: "Only positive numbers are acepted" 
        }
    }
    if ( isNaN(num) ) {
        return {
            num: num,
            response: false,
            error: "Only numbers are acepted" 
        }
    }
    if ( num < 9 ) {
        return {
            num: num,
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
