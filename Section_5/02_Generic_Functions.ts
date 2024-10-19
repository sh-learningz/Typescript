class ArrayUtils {
    wrapInArray<T>(value: T) {
        return value;
    }
}

let util = new ArrayUtils();
util.wrapInArray(1);
util.wrapInArray('1');

// function wrapInArray<T>(value: T) {
//     return value;
// }

// let number = wrapInArray(1);
// let numbers = wrapInArray('1');
