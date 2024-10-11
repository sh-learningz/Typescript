class Account {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    // nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number
    ) {}

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("invalid amount");
        }
        // Record a transaction
        this._balance += amount;
    }

    private calculateTax() {

    }

    get balance(): number {
        return this._balance;
    }

    // set balance(value: number) {
    //     if (value < 0)
    //         throw new Error('Invalid value');

    //     this._balance = value;
    // }
}

let account = new Account(1, "shahriar", 0);

account.deposit(1000);

console.log(account instanceof Account); // output: True

// call getter
console.log(account.balance);

// //call setter
// account.balance = 12000;