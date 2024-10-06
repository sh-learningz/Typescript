type Employee = {
    readonly id: number,
    name: string,
    retired: (date: Date) => void
}

let employee : Employee = {
    id: 1,
    name: "shahriar",
    retired: (date: Date) => {
        console.log(date);
    }
};
