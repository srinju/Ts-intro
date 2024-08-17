 // type >>>

type User = {
    firstName : string,
    lastName : string,
    age : number,
    email ? : string
}

function isLegal(user : User) {
    if(user.age>18){
        return true
    } else {
        return false;
    }
}

const user = {
    firstName : "srinjoy",
    lastName : "das",
    age : 20
}

isLegal(user)
