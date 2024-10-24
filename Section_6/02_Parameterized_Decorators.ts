type componentOptions = {
    selector: string;
}

// Decorator factory
function Component(options: componentOptions) {
    return (constructor: Function) => {
        console.log('component decorator call');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("inserting in DOM");
            
        };
    }
}

// like f(g(x))
function Pipe(constructor: Function) {
    console.log('Pipe decorator call');
    constructor.prototype.pipe = true;
}

@Component({selector: '#my-profile'})
@Pipe
class ProfileCommponent {

}
