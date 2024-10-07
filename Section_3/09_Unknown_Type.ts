let x: any;

function render(document: unknown) {
    // Narrowing
    if (typeof document === 'string'){
        document.toLocaleUpperCase();
    }
}
