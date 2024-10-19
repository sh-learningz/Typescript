class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "sh");
let strPair = new KeyValuePair<string, string>('1', "sh");
let Pairs = new KeyValuePair('1', "sh");
