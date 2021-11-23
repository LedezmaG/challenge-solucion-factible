import '@testing-library/jest-dom'
import { persistence } from './function';

describe('Persistent Bugger initial tests', () => {

    test('should return the number of operations', () => {

        const expectT1 = { 
            num: 39,
            response: 3,
            error: null 
        };
        const expectT2 = { 
            num: 4,
            response: 0,
            error: null 
        };
        const expectT3 = { 
            num: 25,
            response: 2,
            error: null 
        };
        const expectT4 = { 
            num: 999,
            response: 4,
            error: null 
        };

        expect( persistence(39) ).toEqual( expectT1 );
        expect( persistence(4) ).toEqual( expectT2 );
        expect( persistence(25) ).toEqual( expectT3 );
        expect( persistence(999) ).toEqual( expectT4 );
    });

})