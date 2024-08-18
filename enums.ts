//enums >> enumerations  >> lets you define a set of named constants

enum Directions {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

function Dosomething(keyPressed : Directions) {
    if(keyPressed == Directions.up) {
        //do something
    }
    if(keyPressed == Directions.down) {
        // do something
    }
    if(keyPressed == Directions.left) {
        //do somehting
    }
    if(keyPressed == Directions.right) {
        //do something
    }
}

Dosomething(Directions.up);
Dosomething(Directions.down);
