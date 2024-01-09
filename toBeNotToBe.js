/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val !== val2) throw new Error("true");
            else return "Equal";
        }
    };
};

console.log(expect(5).notToBe(5)); // throws "Equal"
console.log(expect(5).toBe(5)); // true
