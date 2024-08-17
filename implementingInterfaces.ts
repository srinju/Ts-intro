

interface Person {
    name : string,
    age : number,
    greet(phrase : string) : void
}

//class implemneting the above interface  >>

class Employee implements Person {
    name : string; //we are defing the name and age here coz we need to do this inside classes before the constructior coz we are gonna use it at last as a object see the new employee line at last
    age : number;

    constructor(n : string , a : number) {
        this.name = n; //in the constructor we will define it what will the object have and this.name it to the things the object are gonna contain
        this.age = a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("harkirat" , 22);
console.log(e);
console.log(e.greet("hi there brother or sister"))
