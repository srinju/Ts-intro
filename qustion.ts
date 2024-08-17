 //given a list of users , filter out the list of user that are legal>>



type User = {
    firstName : string,
    lastName : string,
    age : number
}

function isLegal(arr : User[]) {
    return arr.filter((user) => user.age > 18)
}

/* OR

function isLegal(arr: User[]): User[] {
    const legalUsers: User[] = [];

    for (let i = 0; i < arr.length; i++) {
        const user = arr[i];
        if (user.age > 18) {
            legalUsers.push(user);
        }
    }

    return legalUsers;
}


*/

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
