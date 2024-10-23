function Component(constractor: Function) {
    console.log('component decorator call');
    constractor.prototype.uniqueId = Date.now();
    constractor.prototype.insertInDOM = () => {
        console.log("inserting in DOM");
        
    };
}

class ProfileComponent {

}
