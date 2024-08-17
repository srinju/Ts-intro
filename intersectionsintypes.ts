//intersection in types>> common in both things>>

//we can use type when we want to unions and intersection and we can use interfaces when we want to implement it into a class

type Employee  = {
    name : string,
    startDate : Date
}

type Manager = {
    name : string,
    department : string
}

type TechLead = Employee & Manager ;
//the above lione is same as the below line of techlead>>
interface techlead {
    name : string,
    startdate : Date,
    department : string
}

const user : techlead = {
    name : "srinjoydas",
    startdate : new Date(),
    department : "software development cell"
}
const t : TechLead = {
    name : "srinjoy",
    startDate : new Date(),
    department : "software development cell"
}



console.log(t);
console.log(user);

