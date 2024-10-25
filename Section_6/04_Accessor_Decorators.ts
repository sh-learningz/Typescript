function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = (...args) => {
        original?.call(this)
    }
}

class Persons {
    constructor(public firstName: string, public lastName: string){}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
