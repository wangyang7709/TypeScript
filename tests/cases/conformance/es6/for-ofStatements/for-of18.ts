//@target: ES6
var v: string;
for (v of new StringIterator) { } // Should succeed

class StringIterator {
    next() {
        return {
            value: "",
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}