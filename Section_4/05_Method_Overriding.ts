class Persons {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    walk() {
        console.log('Walking');
    }
}

class Students extends Persons {
    constructor(public studentID: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

    takeTest() {
        console.log("Taking a test");
    }
}

class Teacher extends Persons {
    override get fullName() {
        return "Professor " + super.fullName;
    }
}

class Principal extends Persons {
    override get fullName() {
        return "principal " + super.fullName;
    }
}

printNames([
    new Students(1, 'Ehsan', 'Ghorbani'),
    new Teacher('Shahriar', "Ghasempour"),
    new Principal("Erfan", "ghofrani"),
]);

function printNames(people: Persons[]) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
