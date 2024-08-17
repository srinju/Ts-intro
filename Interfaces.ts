
//before akk the ts concepts are basic available in the word doc of ts notes in web dev folder 

function isLegal(user : User) :boolean {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}

function greet(user : User) {
    console.log("hello " + user.name);
}

interface User {
    name : string,
    reg_no : string,
    age : number,
    email ?: string //user can pass it if they want to or user cant pass it if they dont want to
}

const user = {
    name : "srinjoy",
    reg_no : "22bce8583",
    age : 20
};

isLegal(user);
greet(user);
