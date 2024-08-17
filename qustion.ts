 //given a list of users , filter out the list of user that are legal>>



type User = {
    firstName : string,
    lastName : string,
    age : number
}

function isLegal(arr : User[]) : User[] {
    return arr.filter((user) => user.age > 18)
}

const users : User[] = [{
    firstName : "srinjoy",
    lastName : "das",
    age : 20
},{
    firstName : "harkirat",
    lastName : "singh",
    age : 15
}];

isLegal(users);
