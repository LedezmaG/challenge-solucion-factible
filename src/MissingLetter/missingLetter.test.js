import '@testing-library/jest-dom'
import { findMissingLetter } from './function';

describe('Missing letter initial tests', () => {

    test('should return the missing letter', () => {
        
        const expectT1 = { 
            array: ['a','b','c','d','f'],
            response: ['e'],
            error: null
        };
        const expectT2 = { 
            array: ['O','Q','R','S'],
            response: ['P'],
            error: null
        };

        expect( findMissingLetter(['a','b','c','d','f']) ).toEqual( expectT1 );
        expect( findMissingLetter(['O','Q','R','S']) ).toEqual( expectT2 );
    });

})