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

    getBalance(): number {
        return this._balance;
    }
}

let account = new Account(1, "shahriar", 0);

account.deposit(1000);

console.log(account instanceof Account); // output: True

console.log(account.getBalance());