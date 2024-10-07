function reject(message: string) {
    throw new Error(message);
}

function processEvents(): never {
    while (true) {
        // Read a message
    }
}

processEvents();
// Unreachable code
console.log('Hello Mosh');
