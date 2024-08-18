

//generics  >>  generics are a language independent concept (exisits in c++ as well)

//problem statement >>

//llets say you have a function that needs to return the first element of an array
//.Array can be of your type either string or integer

//solution 1 >>>

type Input = string | number;

function firstElement(arr : Input[]) {
    return arr[0];
}

const value = firstElement(["srinjoy" , "Das"]);
console.log(value.toUppercase); //we cant to toUppercase here

//problem 1 is the above that we cant change it to uppercase
//problem 2 is that we want the user to give any input like string[] or number[]
//above soln mey we can just give the mix of string and numbers as an input but we dont want that

//soln2 >> fix of problem 2>>

function firstelementofarr(arr : string[] | number[]) { //fixed it here
    return arr[0];
}

const value = firstelementofarr[1,2,3,"srinjoy"]; //here it will show error that can t give two kind of mix inputs
console.log(value);

//first problem is still there though ...

//we can have a better approach to solve all of the problems in a single go >
// that is using Genereics

//generics enable you to create components that work with any data type while still
//providing compile-time safety>>

function identity<T>(arg : T) {  //<T> is anything that means the identity function can be called with any value thats what adding <T> gives us
    return arg;
}

let output1  = identity<string>("mystring"); // whenevr we are calling it we will define the t set to that type of that thing here it is string 
let output2 = identity<number>(100); //here is the number and <T> is nothing but called generic in cs terms 

//it is liking creating identity1 function that takes string as an input and another identity 2 function that takes number as an input


const uppercasedoutput1 = output1.toUpperCase();
console.log(uppercasedoutput1);
console.log(output2);

//solution 1 with generics >>>

function FirstElementOfArr<T>(solvedarr : T[]) {
    return solvedarr[0];
}

const value1 =  FirstElementOfArr<number>([1,2,3]);
const value2 = FirstElementOfArr<string>(["srinjoy" , "sukanya"]);
const value3 = FirstElementOfArr<string>(["hehe" , "hoho" , 1 , 2]) //throws error coz we mentioned in the generic that it would be a string and we have given mixed numbers and strigs

const uppercased = value2.toUpperCase();
console.log(value1);
console.log(uppercased);
console.log(value3);
