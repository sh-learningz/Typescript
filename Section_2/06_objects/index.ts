let employee = {id: 1};

let workers : {
    readonly id: number,
    name: string,
    retired: (date: Date) => void
} = {
    id: 1,
    name: "shahriar",
    retired: (date: Date) => {
        console.log(date);
    }
};
