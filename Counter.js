//closure in JS

//type (i)
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var count = n; 
    return function() {
        const currentCount = count;
        count++;
        return currentCount;
    };
};

// type (ii)
var createCounte = function(n){
    var count = n;
    return function(){
        return count++;ṇ
    }
}

//type (iii) using arrow function
var createCounter = n => () => n++;