let title: string = "string"
let age: number = 10
let boolean: boolean = true

//masiv ot stringove
let array: string[] = ["asd", "dsa"]

//zadavane na types za promenliva(obekt?) user
type User = {
    id: number,
    name: string,
    isActive: boolean
}

let user: User = {
    id: 1,
    name: "name",
    isActive: true
}

type Movie = {
    id: number,
    name: string,
    year: number,
    main_actor: string
}

let movie: Movie = {
    id: 2,
    main_actor: "Johnny Depp",
    name: "pirates",
    year: 2010
}

type Smartphone = {
    id: number,
    screen_size: number,
    memory: number,
    year: number,
    has_headphone_jack: boolean
}

let smartphone: Smartphone = {
    id: 3,
    has_headphone_jack: true,
    memory: 64,
    screen_size: 6,
    year: 2018
}

//console.log(smartphone.year)

enum CAR_TYPES {
    SEDAN = "sedan",
    COMBI = "combi",
    HATCHBACK = "hatchback"
}

class Car {
    private type: CAR_TYPES = "" as CAR_TYPES;

    constructor() {

    }
    //void = vuv funkciqta nqma return
    setType(type: CAR_TYPES): void {
        //this = ot tozi class
        this.type = type
    }
    getType():CAR_TYPES {
        return this.type
    }
}

const car = new Car();
car.setType(CAR_TYPES.SEDAN)
console.log(car.getType());


enum MERCEDES_COLOR_TYPES{
    RED = "red",
    GREEN = "green",
    BLUE = "blue"
}
class Mercedes extends Car {
    private color: MERCEDES_COLOR_TYPES= "" as MERCEDES_COLOR_TYPES;

    setColor(color: MERCEDES_COLOR_TYPES): void{
        this.color = color
    }

    getColor(): MERCEDES_COLOR_TYPES{
        return this.color;
    }
}

const mercedes = new Mercedes();
mercedes.setType(CAR_TYPES.COMBI);
mercedes.setColor(MERCEDES_COLOR_TYPES.BLUE);
console.log(mercedes.getColor(), mercedes.getType())