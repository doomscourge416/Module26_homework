import { reverseString } from "../../utils/stringReverse.js";

describe("reverseString fucntion test", ()=>{
    let testString = "Test string, should be reversed"; 
    it("expected string reversed",()=>{
        expect(reverseString(testString)).toBe("desrever eb dluohs ,gnirts tseT")
    })
});