import '@testing-library/jest-dom'
import { arrayDiff } from './function';

describe('Array difference initial tests', () => {

    test('should return only the unique value', () => {
        
        const expectT1 = { 
            set1: [],
            set2: ["4","5"],
            error: "Array required",
            response: false
        };
        const expectT2 = { 
            set1: ["3","4"],
            set2: ["3"],
            error: null,
            response: ["4"]
        };
        const expectT3 = { 
            set1: ["1","8","2"],
            set2: [],
            error: "Array required",
            response: false
        };
        const expectT4 = { 
            set1: ["1","2","3"],
            set2: ["1","2"],
            error: null,
            response: ["3"]
        };

        expect( arrayDiff([], ["4","5"]) ).toEqual( expectT1 );
        expect( arrayDiff(["3","4"], ["3"]) ).toEqual( expectT2 );
        expect( arrayDiff(["1","8","2"], []) ).toEqual( expectT3 );
        expect( arrayDiff(["1","2","3"], ["1","2"]) ).toEqual( expectT4 );
    });

})