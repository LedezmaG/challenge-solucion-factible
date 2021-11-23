
export const validatePIN = ( pin ) => {

    if ( !pin ) {
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
    if ( pin.includes('.' || 'e' ) ) {
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