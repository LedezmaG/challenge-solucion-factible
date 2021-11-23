import '@testing-library/jest-dom'
import { validatePIN } from './function';

describe('Validate PIN initial tests', () => {

    test('should return False for pins with length other than 4 or 6', () => {

        const expectT1 = { 
            pin: '1',
            response: false,
            error: "The pin code can only be 4 or 6 numbers long" 
        };
        const expectT2 = { 
            pin: '123',
            response: false,
            error: "The pin code can only be 4 or 6 numbers long" 
        };
        const expectT3 = { 
            pin: '1234567',
            response: false,
            error: "The pin code can only be 4 or 6 numbers long" 
        };
        const expectT4 = { 
            pin: '00000000',
            response: false,
            error: "The pin code can only be 4 or 6 numbers long" 
        };

        expect( validatePIN("1") ).toEqual( expectT1 );
        expect( validatePIN("123") ).toEqual( expectT2 );
        expect( validatePIN("1234567") ).toEqual( expectT3 );
        expect( validatePIN("00000000") ).toEqual( expectT4 );
    });

    test('should return False for pins which contain characters other than digits', () => {

        const expectT1 = { 
            pin: 'a234',
            response: false,
            error: "Only numbers are acepted" 
        };
        const expectT2 = { 
            pin: '.234',
            response: false,
            error: "Only numbers are acepted" 
        };

        expect( validatePIN("a234") ).toEqual( expectT1 );
        expect( validatePIN(".234") ).toEqual( expectT2 );
    });

    test('should return True for valid pins', () => {

        const expectT1 = { 
            pin: '1234',
            response: true,
            error: null 
        };
        const expectT2 = { 
            pin: '1111',
            response: true,
            error: null 
        };
        const expectT3 = { 
            pin: '123456',
            response: true,
            error: null 
        };
        const expectT4 = { 
            pin: '098765',
            response: true,
            error: null 
        };

        expect( validatePIN("1234") ).toEqual( expectT1 );
        expect( validatePIN("1111") ).toEqual( expectT2 );
        expect( validatePIN("123456") ).toEqual( expectT3 );
        expect( validatePIN("098765") ).toEqual( expectT4 );
    });

})